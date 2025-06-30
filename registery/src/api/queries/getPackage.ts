
// @ts-ignore
import {PackageDetails} from "../types/types";

// @ts-ignore
export const getPackage = async (packageName: string): Promise<PackageDetails> => {

    const response = await fetch(`https://registry.npmjs.org/${packageName}`);
    const data = await response.json();
    return data as PackageDetails;
}