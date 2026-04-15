import { useState } from "react";
import destinations from "../../data/destinations";
import { Destination } from "../../types";

export default function Budget() {
  const [selected, setSelected] = useState<Destination[]>([]);

  const add = (item: Destination) => {
    setSelected([...selected, item]);
  };

  const total = selected.reduce((sum, i) => sum + i.price, 0);

  return (
    <div>
      <h2>Chọn địa điểm</h2>

      {destinations.map((d) => (
        <button key={d.id} onClick={() => add(d)}>
          {d.name}
        </button>
      ))}

      <h2>Tổng tiền: {total}</h2>
    </div>
  );
}