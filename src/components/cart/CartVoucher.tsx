"use client"
import { useCartStore } from '@/store/useCartStore';
import { Voucher } from '@/types/cart';
import React, { useEffect, useState } from 'react'

const CartVoucher = () => {
    const [voucherCode, setVoucherCode] = useState("");
    const [error, setError] = useState("");

    const { subtotal, voucher, applyVoucher, removeVoucher } = useCartStore();

    const handleApplyVoucher = () => {
        const validVouches: Voucher[] = [
            { code: "SAVE10", type: "percentage", value: 10, minOrder: 200 },
            { code: "FIXED50", type: "fixed", value: 50, minOrder: 300 },
        ]
        const foundVoucher = validVouches.find(v => v.code === voucherCode);
        if (foundVoucher) {
            if (foundVoucher.minOrder && subtotal < foundVoucher.minOrder) {
                setError(`Đơn hàng tối thiểu ${foundVoucher.minOrder} VNĐ để áp dụng voucher`);
            } else {
                applyVoucher(foundVoucher);
                setError("");
                setVoucherCode("");
            }
        } else {
            setError("Invalid voucher");
        }
    }

    useEffect(() => {
        setVoucherCode(voucher?.code ?? '');
    }, [voucher?.code]);

    return (
        <>
            <div className="flex items-center gap-5">
                <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter voucher"
                    className="w-full p-2 border rounded text-sm outline-none"
                />

                <button
                    onClick={handleApplyVoucher}
                    className="w-full p-2 bg-blue-500 text-white rounded text-sm hover:opacity-85"
                    aria-label="Apply voucher"
                >
                    Apply voucher
                </button>
                {voucher && (
                    <button
                        onClick={removeVoucher}
                        className="w-full p-2 bg-red-500 text-white rounded text-sm hover:opacity-85"
                        aria-label="Remove voucher"
                    >
                        Remove voucher
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </>
    )
}

export default CartVoucher