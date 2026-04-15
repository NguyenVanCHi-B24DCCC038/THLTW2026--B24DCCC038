import { Order } from "../../types/order";

const thStyle: React.CSSProperties = {
  border: "1px solid black",
  padding: "8px",
  background: "#eee"
};

const tdStyle: React.CSSProperties = {
  border: "1px solid black",
  padding: "8px"
};

type Props = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  search: string;
  filterStatus: string;
  sortType: string;
};

export default function OrderTable({
  orders,
  setOrders,
  search,
  filterStatus,
  sortType
}: Props) {

  const handleCancel = (id: string) => {
    const order = orders.find(o => o.id === id);

    if (!order) return;

    if (order.status !== "Chờ xác nhận") {
      alert("Không thể hủy");
      return;
    }

    if (confirm("Bạn chắc chắn muốn hủy?")) {
      setOrders(
        orders.map(o =>
          o.id === id ? { ...o, status: "Hủy" } : o
        )
      );
    }
  };

  const filtered = orders
    .filter(o =>
      o.id.includes(search) || o.customer.includes(search)
    )
    .filter(o =>
      filterStatus ? o.status === filterStatus : true
    )
    .sort((a, b) => {
      if (sortType === "date")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortType === "total") return b.total - a.total;
      return 0;
    });

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={thStyle}>Mã</th>
          <th style={thStyle}>Khách</th>
          <th style={thStyle}>Ngày</th>
          <th style={thStyle}>Tổng</th>
          <th style={thStyle}>Trạng thái</th>
          <th style={thStyle}>Action</th>
        </tr>
      </thead>

      <tbody>
        {filtered.map(o => (
          <tr key={o.id}>
            <td style={tdStyle}>{o.id}</td>
            <td style={tdStyle}>{o.customer}</td>
            <td style={tdStyle}>{o.date}</td>
            <td style={tdStyle}>{o.total}</td>
            <td style={tdStyle}>{o.status}</td>
            <td style={tdStyle}>
              <button onClick={() => handleCancel(o.id)}>
                Hủy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

