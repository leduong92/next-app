import { NextResponse } from "next/server";
import Stripe from "stripe";

// Thay bằng Stripe Secret Key của bạn
const stripe = new Stripe("", { apiVersion: "2025-05-28.basil" });

export async function POST(request: Request) {
    try {
        const { amount, currency } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ["card"],
            // automatic_payment_methods: { enabled: true },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        return NextResponse.json({ error: error.message ?? "Lỗi tạo PaymentIntent" }, { status: 500 });
    }
}