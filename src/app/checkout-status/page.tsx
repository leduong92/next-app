'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CheckoutStatus() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'success' | 'failure' | null>(null);

    useEffect(() => {
        const statusParam = searchParams.get('status');
        if (statusParam === 'success' || statusParam === 'failure') {
            setStatus(statusParam);
        }
    }, [searchParams]);

    return (
        <div className="min-h-60 flex items-center justify-center pt-10">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
                {status === 'success' && (
                    <>
                        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            Payment Successful !
                        </h1>
                        <p className="text-gray-600 mb-6">
                            {
                                `Thank you for your order! We've successfully received your payment, and your order is now being processed. We're excited for you to receive it soon!`
                            }
                        </p>
                        <a
                            href="/"
                            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Continue shopping
                        </a>
                    </>
                )}

                {status === 'failure' && (
                    <>
                        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            Payment failure !
                        </h1>
                        <p className="text-gray-600 mb-6">
                            {
                                `Oops oh! It looks like there was a hiccup with your payment. Please try again, or if you continue to experience issues, don't hesitate to contact our support team for a quick resolution. We're here to help!`
                            }
                        </p>
                        <a
                            href="/checkout"
                            className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
                        >
                            Try again
                        </a>
                    </>
                )}

                {!status && (
                    <p className="text-gray-600">Payment processing...</p>
                )}
            </div>
        </div>
    );
}