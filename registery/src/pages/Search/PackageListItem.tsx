import {PackageSummary} from "../../api/types/types";
import {Link} from "react-router";

interface PackageListItemProps {
    pack: PackageSummary;
}

const PackageListItem = ({pack}: PackageListItemProps) => {
    const renderKeywords = (pack.keywords).map(keyword => {
        return <div className="border py-0.5 px-1 text-xs bg-slate-200 rounded" key={keyword}>
            {keyword}
        </div>
    })

    const handleClick = (pack: PackageSummary) => {

    }

    return (
        <div className="border border-gray-300 p-4 rounded flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <Link to={`/packages/${pack.name}`} className="text-xl font-bold">{pack.name}</Link>
                <p className="text-sm text-gray-500">
                    {pack.description}
                </p>
                <div className="flex gap-1">
                    {renderKeywords}
                </div>
            </div>
            <div className="mr-6">
                <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-lg">
                    View
                </Link>
            </div>
        </div>
    )

}

export default PackageListItem;