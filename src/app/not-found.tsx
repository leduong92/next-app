import { Tab } from "../components/ui/tabs";

export default function Loading() {

    return (
        <>
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold text-gray-100">Not Found</h1>
                <div className="text-sm text-gray-400">
                    Sorry, the requested resource could not be found
                </div>
            </div>

            <div className="flex">
                <Tab item={{ text: 'Home', slug: "/" }} />
            </div>
        </>
    );
}