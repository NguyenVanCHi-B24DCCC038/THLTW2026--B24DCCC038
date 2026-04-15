import { useState } from "react";
import OrderForm from "./components/order/OrderForm";
import OrderTable from "./components/order/OrderTable";
import { Order } from "./types/order";

export default function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortType, setSortType] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý đơn hàng</h2>

      <OrderForm orders={orders} setOrders={setOrders} />

      <hr />

      <input
        placeholder="Tìm kiếm"
        onChange={e => setSearch(e.target.value)}
      />

      <select onChange={e => setFilterStatus(e.target.value)}>
        <option value="">All</option>
        <option value="Chờ xác nhận">Chờ xác nhận</option>
        <option value="Đang giao">Đang giao</option>
        <option value="Hoàn thành">Hoàn thành</option>
        <option value="Hủy">Hủy</option>
      </select>

      <select onChange={e => setSortType(e.target.value)}>
        <option value="">Không sắp xếp</option>
        <option value="date">Ngày</option>
        <option value="total">Tổng tiền</option>
      </select>

      <OrderTable
        orders={orders}
        setOrders={setOrders}
        search={search}
        filterStatus={filterStatus}
        sortType={sortType}
      />
    </div>
  );
}