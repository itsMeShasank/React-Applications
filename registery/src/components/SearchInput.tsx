import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {VscSearch} from "react-icons/vsc";


const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?term=${searchTerm}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <div className="absolute inset-y-0 flex items-center pl-3">
                        <VscSearch className="h-5 w-5 text-grat-500"/>
                    </div>
                    <input
                        className="border border-gray-200 h-10 w-full rounded-md py-2 pl-10 border-0 shadow-none"
                        id="search"
                        placeholder="Search Packages"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </>
    );
}

export default SearchInput;