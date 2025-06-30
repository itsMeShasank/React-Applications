import {useLoaderData} from "react-router-dom";
import {DetailsLoaderResult} from "./DetailsLoader";

const DetailsPage = () => {
    const {details} = useLoaderData() as DetailsLoaderResult;
    const renderMaintainers = details.maintainers.map(maintainer => {
        return (
            <>
                <li>
                    {details.author?.name} - {details.author?.email}
                </li>
            </>
        );
    })
    return <>
        <div className="space-y-4">
            <h1 className="text-3xl font-bold my-4">
                {details.name}
            </h1>
            <div>
                <h3 className="text-lg font-bold">Description</h3>
                <div className="rounded bg-gray-200 p-3">{details.description}</div>
            </div>
            <div>
                <h3 className="text-lg font-bold">License</h3>
                <div className="rounded bg-gray-200 p-3">{details.license}</div>
            </div>
            <div>
                <h3 className="text-lg font-bold">Author</h3>
                <div className="rounded bg-gray-200 p-3">{details.author?.name}<br/>{details.author?.email}</div>
            </div>
            <div>
                <h3 className="text-lg font-bold">Maintainers</h3>
                <div className="rounded bg-gray-200 p-3">{renderMaintainers}</div>
            </div>
        </div>
    </>;
}

export default DetailsPage;