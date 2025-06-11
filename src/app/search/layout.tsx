import Image from "next/image"
import { FilterItemList } from "../../components/filter/Filter"
import Collections from "../../components/filter/Collections"
import Breadcrumb from "../../components/layout/Breadcrumb"
import { sorting } from "@/lib/constants"
import { getCollectionMenus } from "@/types/item"
import FilterMobile from "../../components/filter/FilterMobile"
import SortMobile from "../../components/filter/SortMobile"


export default async function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const collections = getCollectionMenus();

    return (
        <div className='relative'>
            <div className='bg-pink-50 p-4 flex justify-between h-64'>
                <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
                    <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
                        Grab up to 50% off on
                        <br /> Selected Products
                    </h1>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain" />
                </div>
            </div>

            <Breadcrumb />

            <div className="px-4 md:px-8 lg:px-16 xl:hidden z-10 sticky top-[100px] w-full flex justify-between items-center border-b backdrop-blur-sm bg-white/80 backdrop-saturate-200 h-max py-2">
                <FilterMobile collections={collections} />
                <SortMobile />
            </div>
            <div className="px-4 md:px-8 lg:px-16 pt-5 flex flex-col gap-8 text-black md:flex-row dark:text-white">
                <div className="hidden order-first w-full flex-none xl:flex xl:max-w-[205px] xl:sticky top-[135px] h-max"><Collections collections={collections} /></div>
                <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                <div className="hidden order-none flex-none md:order-last md:w-[205px] xl:flex xl:flex-col xl:sticky top-[135px] h-max"> <FilterItemList list={sorting} /></div>

            </div>
        </div>
    )
}