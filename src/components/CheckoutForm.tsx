"use client"
import { useCartStore } from '@/store/useCartStore';
import React, { useEffect, useState } from 'react'
import CartContent from './cart/CartContent';
import CartTotal from './cart/CartTotal';
import CartLoadingPage from '../app/checkout/loading';
import CartVoucher from './cart/CartVoucher';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from 'next/navigation';

const PAYPAL_CLIENT_ID = "AYOeyCQvilLVKJGjslZfFSi_Nkl7A6OfXNarj5lS55iUcQXMhpp3AypVjAVkS_qvPcO5D415b9SnBFuN"; // PayPal Developer Dashboard

const CheckoutForm = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const { cart, subtotal, vat, total, voucher, clearCart, currency, setCurrency } = useCartStore();
    const stripe = useStripe();
    const elements = useElements();

    const [paymentMethod, setPaymentMethod] = useState<"paypal" | "visa" | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "USD",
        currency: currency || "USD"
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [cardReady, setCardReady] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return <CartLoadingPage />

    // Kiểm tra CardElement đã sẵn sàng
    const handleCardChange = (event: any) => {
        setCardReady(event.complete);
        if (event.error) {
            setError(event.error.message);
        } else {
            setError("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "currency") {
            setCurrency(e.target.value);
        }
    };

    const handleVisaPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        if (!cardReady) {
            setError("Please fill payment information");
            return;
        }


        setLoading(true);
        setError("");

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            setError("Card not found");
            setLoading(false);
            return;
        }

        try {
            // Call API server to create PaymentIntent
            const response = await fetch("/api/stripe-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Math.round(total * 100), // Stripe require calculate amount by cent
                    currency: formData.currency.toLowerCase(),
                }),
            });

            const { clientSecret } = await response.json();

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        address: { line1: formData.address, country: formData.country },
                    },
                },
            });

            if (error) {
                router.push('/checkout-status?status=failure');
            } else if (paymentIntent.status === "succeeded") {
                clearCart();
                router.push(`/checkout-status?status=${true ? 'success' : 'failure'}`);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const handlePayPalPayment = () => {

    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carts */}
            <div>
                <h2 className="text-xl font-bold mb-4 flex gap-2 items-center"><span>Order Summary</span><p className='text-xs'>{cart.length} items</p></h2>
                {cart.length === 0 ? (
                    <p>Shopping cart is empty</p>
                ) : (
                    <>
                        <div className="flex flex-col gap-5 md:h-[calc(100vh-500px)]">
                            <div className="overflow-y-auto max-h-screen scrollbar-hide ">
                                <CartContent />
                            </div>
                            <div className='py-2 flex flex-col gap-2 '>
                                <CartVoucher />
                            </div>
                            <div className="border-t p-4 border">
                                <CartTotal />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Form payment */}
            <div className="py-2 px-4">
                <h2 className="text-xl font-semibold mb-2">Payment Info.</h2>
                <form onSubmit={paymentMethod === "visa" ? handleVisaPayment : undefined}>
                    {/* Account information */}
                    <div className="mb-4">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Adress</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="VN">Việt Nam</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="CN">China</option>
                            {/* Thêm quốc gia khác nếu cần */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Currency</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="VND">VND</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>

                    {/* payment method */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Payment method</h3>
                        <div className="flex items-center mb-2 ">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === "paypal"}
                                onChange={() => setPaymentMethod("paypal")}
                                className="mr-2 cursor-pointer"
                            />
                            <label className='cursor-pointer'>PayPal</label>
                        </div>
                        {paymentMethod === "paypal" && (
                            <div id="paypal-button-container" className="mb-4"></div>
                        )}
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="visa"
                                checked={paymentMethod === "visa"}
                                onChange={() => setPaymentMethod("visa")}
                                className="mr-2 cursor-pointer"
                            />
                            <label className='cursor-pointer'>Visa Card</label>
                        </div>
                        {paymentMethod === "visa" && (
                            <div className="mb-4">
                                <div className="mb-4">
                                    <CardElement
                                        className="p-2 border rounded"
                                        onChange={handleCardChange}
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: "16px",
                                                    color: "#424770",
                                                    "::placeholder": { color: "#aab7c4" },
                                                },
                                                invalid: { color: "#9e2146" },
                                            },

                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Error and Payment button*/}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading || !paymentMethod}
                        className="w-full p-2 bg-green-500 text-white rounded disabled:opacity-50"
                        aria-label="Submit"
                    >
                        {loading ? "Processing..." : "Submit Payment"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm