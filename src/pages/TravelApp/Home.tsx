import { Card } from "antd";
import destinations from "../data/destinations";
import { Destination } from "../types";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {destinations.map((item: Destination) => (
        <Card
          key={item.id}
          cover={<img src={item.image} />}
          title={item.name}
        >
          <p>Loại: {item.type}</p>
          <p>Giá: {item.price}</p>
          <p>Rating: {item.rating}</p>
        </Card>
      ))}
    </div>
  );
}