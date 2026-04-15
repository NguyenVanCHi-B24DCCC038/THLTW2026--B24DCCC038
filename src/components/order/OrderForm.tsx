import { useState } from "react";
import { STATUS } from "../../data/mokData";
import { calcTotal, validateOrder } from "../../utils/orderutils";
import { Order, Product, Status } from "../../types/order";

type Props = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function OrderForm({ orders, setOrders }: Props) {
  const [form, setForm] = useState<Partial<Order>>({
    id: "",
    customer: "",
    status: "Chờ xác nhận",
    products: []
  });

  const handleAdd = () => {
    const error = validateOrder(form, orders);
    if (error) {
      alert(error);
      return;
    }

    const newOrder: Order = {
      id: form.id!,
      customer: form.customer!,
      status: form.status as Status,
      products: form.products as Product[],
      date: new Date().toISOString().slice(0, 10),
      total: calcTotal(form.products as Product[])
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <div>
      <h3>Thêm đơn</h3>

      <input
        placeholder="Mã đơn"
        onChange={e => setForm({ ...form, id: e.target.value })}
      />

      <input
        placeholder="Khách hàng"
        onChange={e => setForm({ ...form, customer: e.target.value })}
      />

      <select
        onChange={e =>
          setForm({ ...form, status: e.target.value as Status })
        }
      >
        {STATUS.map(s => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <button
        onClick={() =>
          setForm({
            ...form,
            products: [
              ...(form.products || []),
              { name: "SP", price: 100000, quantity: 1 }
            ]
          })
        }
      >
        + SP
      </button>

      <button onClick={handleAdd}>Thêm đơn</button>
    </div>
  );
}