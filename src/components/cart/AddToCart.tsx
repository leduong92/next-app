"use client"

import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types/item";
import { useState } from "react";

const AddToCart = ({ product }: { product: Product }) => {
    // const stockNumber = 4;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartStore();

    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < product.stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    }

    const isLoading = false;
    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-500/15 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            disabled={quantity === 1}
                            onClick={() => handleQuantity("d")}
                            aria-label="Decrease"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                        </button>

                        <span className="text-sm">{quantity}</span>
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            disabled={quantity === product.stock}
                            onClick={() => handleQuantity("i")}
                            aria-label="Increase"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    {product.stock < 1 ? (
                        <div className="text-xs">Product is out of stock</div>
                    ) : (
                        <div className="text-xs">
                            Only <span className="text-orange-800 font-semibold">{product.stock} items</span>{" "}
                            left!
                            <br /> {"Don't"} miss it
                        </div>
                    )}
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-36 text-sm rounded-3xl ring-1 ring-cartNumber text-cartNumber py-2 px-4 hover:bg-cartNumber hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
                    aria-label="Add to cart"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default AddToCart