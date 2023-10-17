import { createContext, useContext, useState } from "react";

const UserContext = createContext({
    user: {
        name: "Vikas Pandey",
        email: "vikaspandey490@gmail.com",
    }
});


export default UserContext;