import { useState } from "react";
import destinations from "../data/destinations";
import { Destination } from "../types";

export default function Plan() {
  const [plan, setPlan] = useState<Destination[]>([]);

  const addLocation = (place: Destination) => {
    setPlan([...plan, place]);
  };

  return (
    <div>
      <h2>Chọn địa điểm</h2>

      {destinations.map((item) => (
        <button key={item.id} onClick={() => addLocation(item)}>
          {item.name}
        </button>
      ))}

      <h2>Lịch trình</h2>
      {plan.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  );
}