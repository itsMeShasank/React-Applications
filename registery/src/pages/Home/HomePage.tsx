import {useLoaderData} from "react-router-dom";
import {HomeLoaderResult} from "./HomeLoader";
import {Link} from "react-router";

const HomePage = () => {
    const {featuredPackages} = useLoaderData() as HomeLoaderResult;
    const renderPackages = featuredPackages.map((data) => {
        return (
            <div key={data.name} className="flex flex-col justify-between gap-3 border border-gray-200 rounded shadow p-4">
                <div className="flex flex-col gap-1 border-bottom border-gray-400 ">
                    <div className="font-bold text-center">{data.name}</div>
                    <div className="text-sm text-gray-500">{data.description}</div>
                    <div className="text-sm text-gray-500">{data.maintainers.length} Maintainers</div>
                </div>
                <Link to={`/packages/${data.name}`} className="border border-gray-900 rounded text-center">View</Link>
            </div>
        )
    });
    return <div className="container py-12 space-y-8">
        <div className="space-y-6 text-center">
            <h1 className="text-6xl font-bold ">
                The NPM Registry
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500">
                The package Manger for javaScript. Search and view Packages.
            </p>
        </div>
        <div className="mx-auto grid grid-cols-4 items-stretch max-w-[900px] gap-4">
            {renderPackages}
        </div>
    </div>;
}

export default HomePage;