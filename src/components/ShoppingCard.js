const ShoppingCard = ({ image, title, category, id, price }) => {
    return (

        <div className='hover:shadow-xl max-h-fit outline mt-2 p-2 px-2 m-4 rounded-lg relative hover:scale-105'>
            <img src={image} alt="image" className="h-48 w-48 border-2 rounded-lg ml-16 mt-1 p-4 hover:shadow-2xl " />
            <h2 className="text-xl font-bold">{id}</h2>
            <h3 className="text-xl font-bold">{"Title-" + title.split(" ").slice(0, 4).join(" ") + "..."}</h3>
            <h5 className="text-lg font-bold">{"Category-" + category}</h5>
            <h5 className="text-xl font-bold text-green-600">{"Price-$" + price}</h5>
        </div>
    );
}

export default ShoppingCard;