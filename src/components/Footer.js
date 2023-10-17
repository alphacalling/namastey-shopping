import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="border-t-4 black">
            <h2 className="p-4 m-auto font-sans text-center font-bold from-stone-900 text-xl">
                This site is developed by-
                {user.name} - {user.email}</h2>
        </div>
    )
}
export default Footer;