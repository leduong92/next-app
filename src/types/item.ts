export interface PagedList<T> {
    items: T[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
}

export type Category = {
    id: string;
    name: string;
    slug: string;
};

export const getcategories = (): Category[] => categories;

const categories: Category[] = [
    {
        id: '1',
        name: '6 Sofas',
        slug: 'Sofas',
    },
    {
        id: '2',
        name: '6 nightstands',
        slug: 'nightstands',
    },
    {
        id: '3',
        name: '6 dressers',
        slug: 'dressers',
    },
    {
        id: '4',
        name: '6 coffee table',
        slug: 'coffee-table',
    },
    {
        id: '5',
        name: '6 side tables',
        slug: 'side-tables',
    },
    {
        id: '6',
        name: '6 console tables',
        slug: 'console-tables',
    },
    {
        id: '7',
        name: '6 dining tables',
        slug: 'dining-tables',
    },
    {
        id: '8',
        name: '6 dining chairs',
        slug: 'dining-chairs',
    },
    {
        id: '9',
        name: '6 arm chairs',
        slug: 'arm-chairs',
    },
    {
        id: '10',
        name: '6 sideboards',
        slug: 'sideboards',
    },
];

export type Product = {
    id: string;
    name: string;
    sku?: string;
    slug?: string;
    collectionId: string;
    typeId?: string;
    discount: number;
    price: number;
    originalPrice?: number;
    image: string;
    maxHeight?: number;
    stock: number;
    isNew?: boolean;
    isFeatured?: boolean;
    isDiscount?: boolean;
    availableForSale?: boolean;
    images: string[]
};
export const getProductsBycollectionId = (collectionId: string) =>
    products.filter(x => x.collectionId === collectionId);

export const getcollectionIdBySlug = (slug: string) =>
    categories.find(x => x.slug === slug);

export const getProducts = ({ limit }: { limit?: number } = {}): Product[] => {
    const sorted = [...products].sort((a, b) => (Number(a.id) % 3) - (Number(b.id) % 3));
    return limit ? sorted.slice(0, limit) : sorted;
}

export const getProduct = (slug: string) => {
    return products.find(x => x.slug === slug);
}

const products: Product[] = [
    {
        id: '1',
        name: 'Dorset Upholstered US King Bed',
        sku: 'AL83025.1DMU',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83025.1DMU_main_1.jpg',
        collectionId: '3',
        typeId: '1.',
        slug: 'dorset-upholstered-us-king-bed-al83025-1dmu',
        price: 2,
        maxHeight: 449,
        stock: 5,
        discount: 45,
        isNew: true,
        availableForSale: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83025.1DMU_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83025.1DMU_more_3.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83025.1DMU_more_4.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '2',
        name: 'The India Silk US King Bed',
        sku: 'AL83010',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83010_main_1.jpg',
        collectionId: '3',
        typeId: '1',
        slug: 'the-india-silk-bed-us-king--al83010',
        price: 2,
        maxHeight: 449,
        stock: 15,
        discount: 45,
        isNew: true,
        availableForSale: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83010_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL8/AL83010_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '3',
        name: 'Origins Plinth US King Bed',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83073.C360_main_1.jpg',
        sku: 'TA83073.C360',
        collectionId: '3',
        typeId: '1',
        slug: 'origins-plinth-us-king-bed-ta83073-c360',
        price: 2,
        maxHeight: 340,
        stock: 1,
        discount: 45,
        isNew: true,
        availableForSale: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83073.C360_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83073.C360_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83073.C360_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/TA8/TA83073.C360_Lifestyle_1.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/TA8/TA83073.C360_Lifestyle_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '10',
        name: 'The Vale US King Bed',
        sku: 'TA83005.C147',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83005.C147_main_1.jpg',
        collectionId: '3',
        typeId: '1',
        slug: 'the-vale-us-king-bed-ta83005-c147',
        price: 2,
        maxHeight: 300,
        stock: 2,
        discount: 45,
        isNew: false,
        availableForSale: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83005.C147_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83005.C147_more_4.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83005.C147_more_5.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '11',
        name: 'Hudson King Wood Bed',
        sku: 'TA83064.C363',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83064.C363_main_1.jpg',
        collectionId: '3',
        typeId: '1',
        slug: 'hudson-king-wood-us-king-bed-ta83064-c363',
        price: 2,
        maxHeight: 300,
        stock: 0,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83064.C363_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83064.C363_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83064.C363_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '12',
        name: 'Kesden Poster King Bed',
        sku: 'TA83049.C351',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83049.C351_main_1.jpg',
        collectionId: '3',
        typeId: '1',
        slug: 'kesden-poster-king-bed-ta83049-c351',
        price: 2,
        maxHeight: 300,
        stock: 3,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83049.C351_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83049.C351_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA8/TA83049.C351_more_3.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/TA8/TA83049.C351_Lifestyle_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '13',
        name: 'Cloverlea Nightstand',
        sku: 'AL60061',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60061_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'cloverlea-nightstand-al60061',
        price: 2,
        maxHeight: 300,
        stock: 7,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60061_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60061_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '14',
        name: 'Ibthorpe Nightstand',
        sku: '6005-448',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-448_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'ibthorpe-nightstand-6005-448',
        price: 2,
        maxHeight: 300,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-448_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-448_more_1.jpg',
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '15',
        name: 'The Orval Chest of Drawers',
        sku: 'TA60002.C150',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60002.C150_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'the-orval-chest-of-drawers-ta60002-c150',
        price: 2,
        maxHeight: 300,
        stock: 2,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60002.C150_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60002.C150_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/TA6/TA60002.C150_Lifestyle_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '16',
        name: 'Montauk 2-Drawer Side Table',
        sku: 'TA50389.C402',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C402_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'montauk-2-drawer-side-table-ta50389-c402',
        price: 2,
        maxHeight: 300,
        stock: 2,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C402_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C402_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C402_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '17',
        name: 'Montauk 2-Drawer Side Table',
        sku: 'TA50389.C401',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C401_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'montauk-2-drawer-side-table-ta50389-c401',
        price: 2,
        maxHeight: 300,
        stock: 2,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C401_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50389.C401_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '18',
        name: 'Judith Leiber 1-Drawer Nightstand',
        sku: 'TA50401.C386',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50401.C386_main_1.jpg',
        collectionId: '3',
        typeId: '2',
        slug: 'judith-leiber-1-drawer-nightstand-ta50401-c386',
        price: 2,
        maxHeight: 300,
        stock: 5,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50401.C386_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50401.C386_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50401.C386_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '19',
        name: 'Cloverlea Dresser',
        sku: 'AL60060',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60060_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'cloverlea-dresser-al60060',
        price: 2,
        maxHeight: 300,
        stock: 5,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60060_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60060_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '20',
        name: 'The India Silk Dresser',
        sku: 'AL60031',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60031_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'the-india-silk-dresser-al60031',
        price: 2,
        maxHeight: 300,
        stock: 5,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60031_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL60031_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '21',
        name: 'Spencer London Chinoiserie Chest',
        sku: 'TA61233',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA61233_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'spencer-london-chinoiserie-chest-ta61233',
        price: 2,
        maxHeight: 300,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA61233_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA61233_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA61233_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '22',
        name: 'Spencer London Burl Dresser',
        sku: 'TA60145',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60145_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'spencer-london-burl-dresser-ta60145',
        price: 2,
        maxHeight: 300,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60145_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA6/TA60145_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        },
        isFeatured: true,
    },
    {
        id: '23',
        name: `Valet's Companion Chest`,
        sku: '6005-505',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-505_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'valet-s-companion-chest-6005-505',
        price: 2,
        maxHeight: 300,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-505_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/600/6005-505_more_1.jpg',
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '24',
        name: `Leif Chest of Drawers`,
        sku: 'AXH60010.C105',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AXH/AXH60010.C105_main_1.jpg',
        collectionId: '3',
        typeId: '3',
        slug: 'leif-chest-of-drawers-axh60010-c105',
        price: 2,
        maxHeight: 300,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AXH/AXH60010.C105_main_1.jpg',
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '4',
        name: 'Hackney Lovseat',
        sku: 'SL2192',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SL2/SL2192_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'hackney-lovseat-sl2192',
        price: 2,
        maxHeight: 300,
        stock: 3,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SL2/SL2192_main_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '5',
        name: 'Asciano Sofa',
        sku: 'TASU50152-84',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TAS/TASU50152-84_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'asciano-sofa-tasu50152-84',
        price: 12,
        maxHeight: 182,
        stock: 5,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TAS/TASU50152-16-84_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TAS/TASU50152-53-84_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TAS/TASU50152-54-84_Lifestyle_1.jpg',
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '6',
        name: 'Brera Sofa',
        sku: 'U1213-84',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/U12/U1213-84_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'brera-sofa-u1213-84',
        price: 12,
        maxHeight: 172,
        stock: 2,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/U12/U1213-84_main_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '7',
        name: 'Aiden Sleeper Sofa',
        sku: 'U6209-90',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'aiden-sleeper-sofa-u6209-90',
        price: 12,
        maxHeight: 200,
        stock: 1,
        discount: 45,
        isNew: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_more_3.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/U62/U6209-90_more_5.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '8',
        name: 'Barnet Sofa',
        sku: 'SL1190',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SL1/SL1190_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'barnet-sofa-sl1190',
        price: 12,
        maxHeight: 181,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SL1/SL1190_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/SL1/SL1190_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '9',
        name: 'TAilor Fit Long Loveseat',
        sku: 'T321',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/T32/T321_main_1.jpg',
        collectionId: '1',
        typeId: '1',
        slug: 'tailor-fit-long-loveseat-t321',
        price: 3,
        maxHeight: 185,
        stock: 2,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/T32/T321_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/T32/T321_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/T32/T321_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '26',
        name: 'Montauk Side Table',
        sku: 'TA50378.C401',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C401_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'montauk-side-table-ta50378-c401',
        price: 3,
        maxHeight: 185,
        stock: 10,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C401_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C401_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '27',
        name: 'Montauk Square Side Table',
        sku: 'TA50378.C402',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C402_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'montauk-side-table-ta50378-c402',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C401_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50378.C401_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '28',
        name: 'Spencer St. James Side Table',
        sku: 'TA50424.C412',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50424.C412_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'spencer-st-james-side-table-ta50424-c412',
        price: 3,
        maxHeight: 185,
        stock: 0,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50424.C412_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50424.C412_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '29',
        name: 'Hudson Side Table',
        sku: 'TA50235.C363',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50235.C363_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'hudson-side-table-ta50235-c363',
        price: 3,
        maxHeight: 185,
        stock: 0,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50235.C363_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50235.C363_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '30',
        name: 'Judith Leiber Side Table',
        sku: 'TA50402.C386',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50402.C386_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'judith-leiber-side-table-ta50402-c386',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50402.C386_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50402.C386_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50402.C386_more_3.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '31',
        name: 'Origins Side Table',
        sku: 'TA50294.C361',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50294.C361_main_1.jpg',
        collectionId: '1',
        typeId: '2',
        slug: 'origins-side-table-ta50294-c361',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50294.C361_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50294.C361_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA50294.C361_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/TA5/TA50294.C361_Lifestyle_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '32',
        name: 'Whilton Console',
        sku: 'AL53076',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53076_main_1.jpg',
        collectionId: '1',
        typeId: '3',
        slug: 'whilton-console-al53076',
        price: 3,
        maxHeight: 185,
        stock: 21,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53076_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53076_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53076_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '33',
        name: 'Welwyn Console Table',
        sku: 'AL53077',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53077_main_1.jpg',
        collectionId: '1',
        typeId: '3',
        slug: 'welwyn-console-table-al53077',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53077_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL5/AL53077_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '34',
        name: 'Spencer London Rococo Console',
        sku: 'TA53145',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA53145_main_1.jpg',
        collectionId: '1',
        typeId: '3',
        slug: 'spencer-london-rococo-console-ta53145',
        price: 3,
        maxHeight: 185,
        stock: 11,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA53145_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/TA5/TA53145_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '35',
        name: 'Undulating armchair',
        sku: 'A204.5',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/A20/A204.5_main_1.jpg',
        collectionId: '1',
        typeId: '4',
        slug: 'undulating-armchair-a204-5',
        price: 3,
        maxHeight: 185,
        stock: 0,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/A20/A204.5_main_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '36',
        name: 'Barnet Chair',
        sku: 'SL3190',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SL3/SL3190_main_1.jpg',
        collectionId: '1',
        typeId: '4',
        slug: 'barnet-chair-sl3190',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SL3/SL3190_main_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '37',
        name: 'Floris Dining Side Chair',
        sku: 'AL40099.1DMU',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL40099.1DMU_main_1.jpg',
        collectionId: '2',
        typeId: '1',
        slug: 'floris-dining-side-chair-al40099-1dmu',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL40099.1DMU_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL40099.1DMU_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL40099.1DMU_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL40099.1DMU_more_3.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '38',
        name: 'Floris Dining Arm Chair',
        sku: 'AL41099.1DMU',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL41099.1DMU_main_1.jpg',
        collectionId: '2',
        typeId: '1',
        slug: 'floris-dining-arm-chair-al41099-1dmu',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL41099.1DMU_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL41099.1DMU_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL41099.1DMU_more_2.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL4/AL41099.1DMU_more_3.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '39',
        name: 'Sloane Armchair',
        sku: 'SC41011.1DJS',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41011.1DJS_main_1.jpg',
        collectionId: '2',
        typeId: '1',
        slug: 'sloane-armchair-sc41011-1djs',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41011.1DJS_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41011.1DJS_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '40',
        name: 'Sloane Armchair II',
        sku: 'SC41012.1DJU',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41012.1DJU_main_1.jpg',
        collectionId: '2',
        typeId: '1',
        slug: 'sloane-armchair-ii-sc41012-1dju',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41012.1DJU_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41012.1DJU_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC4/SC41012.1DJU_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '41',
        name: 'Brook Street Supper Dining Table',
        sku: '5405-072',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/540/5405-072_main_1.jpg',
        collectionId: '2',
        typeId: '2',
        slug: 'brook-street-supper-dining-table-5405-072',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/540/5405-072_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/540/5405-072_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '42',
        name: 'Edward Extending Dining Table',
        sku: 'AXH54001.C117',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AXH/AXH54001.C117_main_1.jpg',
        collectionId: '2',
        typeId: '2',
        slug: 'edward-extending-dining-table-axh54001-c117',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: true,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AXH/AXH54001.C117_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AXH/AXH54001.C117_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/AXH/AXH54001.C117_Lifestyle_1.jpg',
            'https://theodorealexander.sirv.com/ProductPhotos/AXH/AXH54001.C117_more_3.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '43',
        name: 'Dorchester Round Dining Table',
        sku: 'SC54032',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/SC5/SC54032_main_1.jpg',
        collectionId: '2',
        typeId: '2',
        slug: 'dorchester-round-dining-table-ii-sc54032',
        price: 3,
        maxHeight: 185,
        stock: 0,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC5/SC54032_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/SC5/SC54032_more_1.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '44',
        name: 'Jacoby Dining Table',
        sku: '5400-198',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/540/5400-198_main_1.jpg',
        collectionId: '2',
        typeId: '2',
        slug: 'jacoby-dining-table-5400-198',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/540/5400-198_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/540/5400-198_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/540/5400-198_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
    {
        id: '45',
        name: 'Tilbury Sideboard',
        sku: 'AL61107',
        image: 'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL61107_main_1.jpg',
        collectionId: '2',
        typeId: '4',
        slug: 'tilbury-sideboard-al61107',
        price: 3,
        maxHeight: 185,
        stock: 1,
        discount: 45,
        isNew: false,
        images: [
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL61107_main_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL61107_more_1.jpg',
            'https://theodorealexander.sirv.com/ProductphotoCrop/AL6/AL61107_more_2.jpg'
        ],
        get originalPrice() {
            return Math.round(this.price / (1 - this.discount / 100));
        },
        get isDiscount() {
            return this.discount > 0;
        }
    },
];


export const getCollectionMenus = (): Collection[] => {
    const sorted = [...collections];
    return sorted;
}


export type Collection = {
    id: string;
    name: string;
    slug?: string;
    image?: string;
    items?: ProductType[]
};

export type ProductType = {
    id: string;
    name?: string;
    slug?: string;
    collectionId: string;
}

const collections: Collection[] = [
    {
        id: '1',
        name: 'Living',
        slug: 'living',
        items: [
            {
                id: '1',
                collectionId: '1',
                name: '6 Sofas',
                slug: 'sofa'
            },
            {
                id: '2',
                collectionId: '1',
                name: '6 Side Tables',
                slug: 'side-table'
            },
            {
                id: '3',
                collectionId: '1',
                name: '6 Console Tables',
                slug: 'console-table'
            },
            {
                id: '4',
                collectionId: '1',
                name: '6 Arm Chairs',
                slug: 'arm-chair'
            }
        ]
    },
    {
        id: '2',
        name: 'Dining',
        slug: 'dining',
        items: [
            {
                id: '1',
                collectionId: '2',
                name: '6 Dining Chairs',
                slug: 'dining-chair'
            },
            {
                id: '2',
                collectionId: '2',
                name: '6 Dining Table',
                slug: 'dining-table'
            },
            {
                id: '3',
                collectionId: '2',
                name: '6 Side Boards',
                slug: 'side-board'
            },

            {
                id: '4',
                collectionId: '2',
                name: '6 Coffee Tables',
                slug: 'coffee-table'
            },
        ]
    },
    {
        id: '3',
        name: 'Bed',
        slug: 'bed',
        items: [
            {
                id: '1',
                collectionId: '3',
                name: '6 Beds',
                slug: 'bed'
            },
            {
                id: '2',
                collectionId: '3',
                name: '6 NightStands',
                slug: 'night-stand'
            },
            {
                id: '3',
                collectionId: '3',
                name: '6 Dressers',
                slug: 'dresser'
            },
        ]
    },
];
