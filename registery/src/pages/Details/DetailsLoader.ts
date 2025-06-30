

// @ts-ignore
import {getPackage} from "../../api/queries/getPackage";
import {PackageDetails} from "../../api/types/types";

export interface DetailsLoaderResult {
    details: PackageDetails;
}

// @ts-ignore
export const DetailsLoader = async (props): Promise<DetailsLoaderResult> => {
    const packageName = props.params.name;
    if(!packageName) {
        throw Error("Package Name should provide");
    }
    const response = await getPackage(packageName);
    return {
        details: response,
    }
}