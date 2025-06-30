import type {PackageSummary} from "../types/types.js";

interface SearchResponse {
    objects: {
        package: {
            name: string;
            version: string;
            description: string;
            keywords: string[];
        }
    }[]
}


// @ts-ignore
export async function SearchPackages (term: string): Promise<PackageSummary[]> {

    const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`);
    const data: SearchResponse = await response.json();
    return data.objects.map(searchResult => {
        return {
            name: searchResult.package.name,
            description: searchResult.package.description,
            version: searchResult.package.version,
            keywords: searchResult.package.keywords,
        } as PackageSummary;
    })
}
