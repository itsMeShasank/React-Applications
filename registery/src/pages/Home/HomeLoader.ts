import {getFeaturedPackages} from "../../api/queries/getFeaturedPackages";
import { PackageDetails } from "../../api/types/types";

export interface HomeLoaderResult {
    featuredPackages: PackageDetails[];
}
// @ts-ignore
export const HomeLoader = async (): Promise<HomeLoaderResult> => {

    const responses =  await getFeaturedPackages();
    return {
        featuredPackages: responses,
    }
};