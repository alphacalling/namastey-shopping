import { useEffect, useState } from "react";

const useShopping = (id) => {
    const [shopping, setShopping] = useState();


    useEffect(() => {
        //api call
        getShoppingInfo();
    }, []);

    async function getShoppingInfo() {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        console.log(json);
        setShopping(json);
    }

    return shopping
}
export default useShopping;