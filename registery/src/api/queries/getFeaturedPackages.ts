import {PackageDetails} from "../types/types";

const FEATURED_PACKAGES = [
    'react',
    'typescript',
    'esbuild',
    'vite',
];
// @ts-ignore
export const getFeaturedPackages = async () => {

    // @ts-ignore
    const promises = FEATURED_PACKAGES.map(async (name: string) => {
        const response = await fetch(`https://registry.npmjs.org/${name}`);
        return response.json();
    });
    // @ts-ignore
    const data = await Promise.all(promises);

    return data as PackageDetails[];
}