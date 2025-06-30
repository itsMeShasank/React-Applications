import {Link} from "react-router";
import SearchInput from "./SearchInput";

const Header = () => {
    return (
        <div className="border border-gray-200 w-full flex flex-row items-center justify-between px-4 border-b h-14">
           <div className="flex items-center text-sm font-medium space-x-2">
               <Link to="/" className="text-lg font-bold">NPM Registry</Link>
           </div>
            <div className="flex items-center text-sm font-medium space-x-2">
                <SearchInput />
            </div>
        </div>
    );
}

export default Header;