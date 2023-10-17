import { useDispatch, useSelector } from 'react-redux';
import ShoppingCard from './ShoppingCard';
import { clearItem } from '../utils/cartSlice'
import { toast } from 'react-toastify'

const CartItem = () => {
    const CartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const clearCartHandler = () => {
        dispatch(clearItem());
        toast.warning("Cart Cleared");
    }

    return (
        <div className='p-2 m-2 mt-5 shadow-xl'>
            <h2 className='font-bold text-xl text-center'>Cart Items{CartItems.length}</h2>
            <button className='bg-green-600 p-2 m-2 rounded' onClick={() => clearCartHandler()}
            >Clear Cart</button>
            <div className='flex flex-wrap '>
                {CartItems.map(item =>
                    <ShoppingCard key={item.id} {...item} />
                )}
            </div>
        </div>
    )
}
export default CartItem;