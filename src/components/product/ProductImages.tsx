"use client";

import { Product } from "@/types/item";
import Image from "next/image";
import Script from "next/script";
import { Suspense, useState } from "react";

// const images = [
//     {
//         id: 1,
//         url: "https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83072.1CQM_main_1.jpg?profile=new-ProductDetailGalleryDesktop",
//     },
//     {
//         id: 2,
//         url: "https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83072.1CQM_more_1.jpg?profile=new-ProductDetailGalleryDesktop",
//     },
//     {
//         id: 3,
//         url: "https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83072.1CQM_more_2.jpg?profile=new-ProductDetailGalleryDesktop",
//     },
// ];

const ProductImages = ({ product }: { product: Product }) => {
    return (
        <Suspense>
            <div className="">
                <div className="flex">
                    <div className="Sirv product_detail_gallery_container !h-[600px]" data-options="zoom.hint.enable:false; thumbnails.type:bullets">
                        {product.images?.map((item, idx) => (
                            // <div key={idx} className="p-12" data-src={`${item}?profile=basic`} aria-label={`${product.sku}_Image_${idx}`} data-type="zoom" data-options="mode:deep; trigger:click"></div>
                            <div
                                key={idx}
                                className="p-12"
                                data-src={`${item}?profile=basic`}
                                data-alt={`Product image ${idx + 1} of ${product.name}`}
                                aria-label={`${product.sku}_Image_${idx}`}
                                data-type="zoom"
                                data-options="mode:deep; trigger:click"
                            >
                                <noscript>
                                    <Image
                                        src={`${item}?profile=basic`}
                                        alt={`Product image ${idx + 1} of ${product.name}`}
                                        width={600}
                                        height={600}
                                    />
                                </noscript>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Script src="https://scripts.sirv.com/sirvjs/v3/sirv.js" strategy="lazyOnload" />

            <Script id="sirvZoom">
                {`
                var SirvOptions = {
                    viewer: {
                      zoom: {
                        mode: 'deep',
                      }
                    }
                  }
                `}
            </Script>

        </Suspense>
    );
};

export default ProductImages;
