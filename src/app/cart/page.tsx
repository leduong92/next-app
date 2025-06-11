"use client"
import { useCartStore } from '@/store/useCartStore'
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react'
import CartContent from '@/components/cart/CartContent';
import CartTotal from '@/components/cart/CartTotal';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CartLoadingPage from './loading';

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { cart } = useCartStore();


    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return <CartLoadingPage />


    return (
        <Suspense fallback={<CartLoadingPage />}>
            <Breadcrumb />

            <div className="px-4 md:px-8 lg:px-16 overflow-hidden">
                {cart.length === 0 ? (
                    <p>Shopping cart is empty</p>
                ) : (
                    <div className='flex flex-col md:flex-row gap-5 md:h-[calc(100vh-264px)] py-4'>
                        <div className='overflow-y-auto max-h-screen scrollbar-hide md:w-2/3'>
                            <CartContent />
                        </div>
                        <div className='border p-4 rounded h-max md:w-1/3'>
                            <CartTotal />
                            <div className='h-[2px] boxShadown'></div>
                            <div className='flex justify-between text-sm pt-4'>
                                <Link href="/checkout" prefetch={true} className='w-full'>
                                    <button className='rounded-md py-3 px-4 w-full bg-black text-white text-sm hover:opacity-85' aria-label="Checkout">Checkout</button>
                                </Link>
                            </div>
                            <div className="">
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold mb-2">Chính sách giao hàng </h3>
                                    <ul className="list-disc pl-5 text-sm leading-loose">
                                        <li>Thời gian giao hàng dự kiến: 3-5 ngày làm việc trong nội thành, 5-7 ngày cho khu vực khác.</li>
                                        <li>Phí giao hàng: Miễn phí cho đơn hàng trên 500,000 VNĐ, phí 30,000 VNĐ cho đơn hàng dưới 500,000 VNĐ.</li>
                                        <li>Đổi trả: Hỗ trợ đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc không đúng mô tả.</li>
                                        <li>Liên hệ: Email support@shop.com hoặc hotline 0123 456 789.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>

        </Suspense>
    )
}

export default CartPage