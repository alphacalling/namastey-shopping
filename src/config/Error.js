import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex flex-col bg-yellow-50 m-24">
            <h2 className="font-bold text-xl text-center">Oops...!!!</h2>
            <h3 className="font-semibold text-lg text-center">Error Found</h3>
            <h2 className="font-serif text-center text-blue-800">{error.status + "-" + error.statusText + "  " + error.data}</h2>
        </div>
    )
}
export default Error;