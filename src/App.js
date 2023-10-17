import React, { Suspense, lazy } from 'react';
import reactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Error from './config/Error';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import ShoppingMenu from './components/ShoppingMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import store from './utils/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Chunks = lazy(() => import("./components/Chunks"));


const AppLayout = () => {
    return (

        <Provider store={store}>
            <Navbar />
            <Outlet />
            <Footer />
        </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                children: [

                ]
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/cartItem",
                element: <CartItem />,
            },

        ],
    },
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/shopping/:id",
                element: <ShoppingMenu />,
            },
            {
                path: "/chunks",
                element: <Suspense fallback={<Shimmer />}><Chunks /></Suspense>,
            },
        ]
    }
]);

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <RouterProvider router={appRouter} />
        <ToastContainer />
    </div>
);














// const RestaurantCard = ({ data }) => {
//     console.log(data);
//     return (

//         <div className='card'>
//             <img src={data.image} alt="Pizza" />
//             <h4>{data.companyName}</h4>
//             <h5>{data.cuisines}</h5>
//             <h6>{data.ratings}</h6>
//         </div>
//     );
// }

// const RestaurantCard = ({ data }) => {
//     console.log(data);
//     const { image, companyName, cuisines, ratings } = data;
//     return (

//         <div className='card'>
//             <img src={image} alt="Pizza" />
//             <h4>{companyName}</h4>
//             <h5>{cuisines}</h5>
//             <h6>{ratings}</h6>
//         </div>
//     );
// }



// const Body = () => {
//     return (
//         <div className='body'>
//             <RestaurantCard
//                 name={restaurants[0].name}
//                 cuisines={restaurants[0].cuisines}
//                 image={restaurants[0].image}
//                 companyName={restaurants[0].companyName}
//                 ratings={restaurants[0].ratings} />


{/* <RestaurantCard data={restaurants[1]} />
            <RestaurantCard data={restaurants[2]} />
            <RestaurantCard data={restaurants[3]} /> */}
//         </div>
//     )
// }

{/* <RestaurantCard
            {...restaurants[0]}
        />

        <RestaurantCard
            {...restaurants[1]}
        />
        <RestaurantCard
            {...restaurants[2]}
        />
        <RestaurantCard
            {...restaurants[3]}
/> */}

// const Body = () => {
//     return (
//         <div className='body'>
//             <RestaurantCard data={restaurants[0]} />
//             <RestaurantCard data={restaurants[1]} />
//             <RestaurantCard data={restaurants[2]} />
//             <RestaurantCard data={restaurants[3]} />
//         </div>
//     )
// }



