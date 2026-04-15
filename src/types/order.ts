export type Status =
  | "Chờ xác nhận"
  | "Đang giao"
  | "Hoàn thành"
  | "Hủy";

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  products: Product[];
  total: number;
  status: Status;
}