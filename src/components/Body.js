import ShoppingCard from "./ShoppingCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./SearchBox";
import useOnline from "../utils/useOnline";


const Body = () => {

    const [allShoppings, setAllShoppings] = useState([]);
    const [filteredShoppings, setFilteredShoppings] = useState([]);
    const [searchText, setSearchText] = useState("");
    // for api call
    useEffect(() => {
        getShoppings();
    }, [])

    async function getShoppings() {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data?.json();
        console.log(json);
        setAllShoppings(json);
        setFilteredShoppings(json);

    }
    const Online = useOnline();
    if (!Online) {
        return (
            <>
                <div>
                    <h2 className="font-bold text-2xl text-center m-5 p-10">❌Ohh...It seems you are offline..❌</h2>
                    <h4 className="font-bold text-xl text-center">✅✅Check your Internet connection</h4>
                </div>
            </>
        )
    }

    // if not render anything(early return)
    if (!allShoppings) return null;

    return allShoppings?.length === 0 ? (<Shimmer />) :
        (
            <>
                <div className="flex justify-center relative">
                    <input className="focus:bg-yellow-50 mt-5 border-2 rounded-xl w-2/6 h-12 placeholder:text-center"
                        type="text"
                        placeholder="Search your desired Items here.."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />

                    <button className="h-10 w-20 m-5 bg-blue-800 text-white rounded-lg hover:bg-blue-900 cursor-pointer"
                        onClick={() => {
                            const data = filterData(searchText, allShoppings)
                            setFilteredShoppings(data);
                        }}>
                        Search
                    </button>
                </div>

                <div className='max-w-fit max-h-fit grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 rounded-md'>

                    {
                        filteredShoppings.map((shopping) => {

                            return (
                                <div className="">
                                    <Link to={"/shopping/" + shopping.id}
                                        key={shopping.id}>
                                        <ShoppingCard {...shopping} />
                                    </Link>
                                </div>
                                //<ShoppingCard data={shopping} key={shopping.id} />
                            )
                        })
                    }

                </div>
            </>
        );
}
export default Body;
