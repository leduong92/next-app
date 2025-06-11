import { ProductCardSkeleton } from "@/components/product/ProductCard";

export default function SearchLoading() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                </div>
            </div>
        </>
    );
}