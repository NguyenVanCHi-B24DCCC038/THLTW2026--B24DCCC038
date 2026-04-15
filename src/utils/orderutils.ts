import { Product, Order } from "../types/order";

export const calcTotal = (products: Product[]): number => {
  return products.reduce((sum, p) => sum + p.price * p.quantity, 0);
};

export const validateOrder = (
  form: Partial<Order>,
  orders: Order[]
): string | null => {
  if (!form.id || !form.customer) {
    return "Không được để trống";
  }

  if (orders.find(o => o.id === form.id)) {
    return "Trùng mã đơn";
  }

  return null;
};