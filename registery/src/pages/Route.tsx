import Header from "../components/Header";
import {Outlet} from "react-router-dom";

const Route = () => {

    return <>
        <div className="container mx-auto px-20">
            <Header />
            <Outlet />
        </div>
    </>
}

export default Route;