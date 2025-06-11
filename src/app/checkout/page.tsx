"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";

const stripePromise = loadStripe("pk_test_51MeqxeD5PH2vtlYUCVRjHZ46bDGzIj3lKCa3q8V8Dwl1lbbj0gBIjpGWJCJBgljnRAN6NYEuIpxM4ABSGssSEcHr00y6pLImo4"); // 


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