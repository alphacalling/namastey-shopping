import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.webp';
import useOnline from "../utils/useOnline";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai'


export const Title = () => (
    <div className='max-w-screen-xl flex flex-wrap'>
        <a href="/" className="flex">
            <img src={Logo} alt="Logo" className="h-20 w-24" />
            <h6
                id='title'
                key="h1">
            </h6>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 m-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-10"
        >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    </div>
);

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Online = useOnline()

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <>
            <div className='flex border border-blue-950 rounded-md bg-cyan-500 flex-wrap items-center justify-between'>
                <Title />
                <div className="w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <Link to="/">
                            <li className="block py-2 pl-3 pr-4 text-lg font-semibold hover:text-white hover:underline rounded md:bg-transparent md:p-0">Home</li>
                        </Link>
                        <Link to="/About">
                            <li className="block py-2 pl-3 pr-4 text-lg font-semibold hover:text-white hover:underline rounded md:bg-transparent md:p-0">About us</li>
                        </Link>
                        <Link to="Chunks">
                            <li className="block py-2 pl-3 pr-4 text-lg font-semibold hover:text-white hover:underline rounded md:bg-transparent md:p-0">Accordion</li>
                        </Link>
                        <Link to="/CartItem">
                            <li className="py-2 pl-3 pr-4 text-lg font-semibold hover:text-white hover:underline rounded md:bg-transparent md:p-0 flex">
                                <AiOutlineShoppingCart className='text-2xl' />{
                                    cartItems.length > 0 && <span className="absolute sm:top-5 p-1 flex justify-center items-center animate-bounce
                                     bg-green-600 text-white text-sm rounded-full">{cartItems.length}</span>
                                }
                            </li>
                        </Link>
                    </ul>
                </div>

                {isLoggedIn ?
                    <button className="h-10 w-20 m-5 bg-blue-800 text-white rounded-lg hover:bg-blue-900" onClick={() => setIsLoggedIn(false)}>Log Out</button> :
                    <button className="h-10 w-20 m-5 bg-blue-800 text-white rounded-lg hover:bg-blue-900" onClick={() => setIsLoggedIn(true)}>Log In</button>
                }
                <div className="flex flex-wrap animate-bounce left-5">
                    <h2 className="">{Online ? "🌕" : "🔴"}</h2>
                </div>
            </div>
        </>
    )
}

export default Navbar;





