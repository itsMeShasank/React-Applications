import {SearchPackages} from "../../api/queries/SearchPackages";
import {PackageSummary} from "../../api/types/types";

export interface SearchLoaderResult {
    searchResults: PackageSummary[],
}


// @ts-ignore
export const SearchLoader = async ({request}: {request: Request}): Promise<SearchLoaderResult> => {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");
    if(!term) {
        throw Error("Search term should provide");
    }
    const data = await SearchPackages(term);
    return {
        searchResults: data,
    };
};