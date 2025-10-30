import { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";

const App = () => {
    const [{ user }, dispatch] = useContext(DataContext);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log(authUser);
            if (authUser) {
                dispatch({
                    type: Type.SET_USER,
                    user: authUser,
                });
            } else {
                dispatch({
                    type: Type.SET_USER,
                    user: null,
                });
            }
        });
    }, []);

    return (
        <>
            <Routing />
        </>
    );
};

export default App;
