import {useLoaderData} from "react-router-dom";
import {SearchLoaderResult} from "./SearchLoader";
import PackageListItem from "./PackageListItem";
import {PackageSummary} from "../../api/types/types";

const SearchPage= () => {
    const data = useLoaderData() as SearchLoaderResult;
    const renderItems = data.searchResults.map((item: PackageSummary) => {
        return <PackageListItem pack={item} key={item.name}/>
    })
    return <div>
        <h1 className="text-2xl font-bold my-6"> Search Result</h1>
        <div className="space-y-4 mt-4">
            {renderItems}
        </div>
    </div>;
}

export default SearchPage;