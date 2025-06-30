export interface PackageSummary {
    name: string;
    keywords?: string[];
    description: string;
    version: string;
}

export interface PackageDetails {
    name: string;
    description: string;
    readme: string;
    author: Maintainer;
    maintainers: Maintainer[];
    license: string;
}
export interface Maintainer {
    name: string;
    email: string;
}