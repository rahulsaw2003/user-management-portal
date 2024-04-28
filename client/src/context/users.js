import { createContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/api";
import Loading from "../components/Loading";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        try {
            const response = await getAllUsers();
            console.log("All Users data retrived successfully at API", response);
            setUsers(response.data);
        } catch (error) {
            console.log("Error while calling getAllUsers API ", error);
        }
    };

    return <UserContext.Provider value={{ users }}>{Object.keys(users).length > 0 ? props.children : <Loading isLoading={true} />}</UserContext.Provider>;
};
