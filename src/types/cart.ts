import { Product } from "./item";

export interface Cart {
    product: Product,
    quantity: number
}

export interface Voucher {
    code: string;
    type: "percentage" | "fixed";
    value: number; // Phần trăm (0-100) hoặc số tiền cố định
    minOrder?: number; // Giá trị đơn hàng tối thiểu để áp dụng
}