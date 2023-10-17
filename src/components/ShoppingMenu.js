import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useShopping from '../utils/useShopping'
import { addItem } from "../utils/CartSlice";
import { removeItem } from "../utils/CartSlice";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

const ShoppingMenu = () => {
    const param = useParams();
    const { id } = param;
    console.log(id);
    const response = useShopping();
    const dispatch = useDispatch();

    //for adding items in cart
    const addHandler = (item) => {
        dispatch(addItem(item));
        toast.success("Item added successfully");
    }

    //for removing item from cart
    const removeHandler = (item) => {
        dispatch(removeItem(item.id));
        toast.warning("Item Removed");
    }

    return (!response) ? <Shimmer /> : (
        <div className='max-w-fit max-h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 rounded-lg'>
            {response.map((item) => (

                <div key={item?.id} className='border mt-8 bg-white px-5 m-4 rounded-lg relative'>
                    <h4 className="text-xl font-bold">shopping id: {id}</h4>
                    <img className="h-48 w-48 border-2 rounded-lg ml-16 mt-1 p-4 hover:shadow-xl bg-blue-50" src={item.image} alt={item.title} />
                    <h4 className="text-xl font-bold">{item.id}</h4>
                    <h6 className="text-xl font-bold">{"Title-" + item.title.split(" ").slice(0, 8).join(" ") + "..."}</h6>
                    <h5 className="text-md list-none">{"Category-" + item.category}</h5>
                    <div className="flex">
                        <button className="h-10 w-24 p-2 m-4 text-center cursor-pointer bg-blue-800 text-white rounded-lg hover:bg-green-500"
                            onClick={() => addHandler(item)}
                        >Add Items</button>
                        <button className="h-10 w-24 p-2 m-4 text-center cursor-pointer  bg-green-800 text-white rounded-lg hover:bg-blue-500"
                            onClick={() => removeHandler(item)}
                        >Remove Item</button>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default ShoppingMenu;