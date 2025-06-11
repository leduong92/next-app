"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`); // 


const CheckoutForm = dynamic(() => import("@/components/CheckoutForm"), { ssr: false });

export default function CheckoutPage() {

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Payment Information</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}