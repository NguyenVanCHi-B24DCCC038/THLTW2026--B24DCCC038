import { useState } from "react";
import { Destination } from "../../types";

export default function Admin() {
  const [list, setList] = useState<Destination[]>([]);

  const [form, setForm] = useState<Destination>({
    id: 0,
    name: "",
    type: "",
    price: 0,
    rating: 0,
    image: ""
  });

  const handleChange = (key: keyof Destination, value: any) => {
    setForm({ ...form, [key]: value });
  };

  const handleAdd = () => {
    if (!form.name) return;

    setList([
      ...list,
      { ...form, id: Date.now() }
    ]);

    setForm({
      id: 0,
      name: "",
      type: "",
      price: 0,
      rating: 0,
      image: ""
    });
  };

  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>ADMIN</h2>

      {/* FORM */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Tên"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          placeholder="Loại"
          value={form.type}
          onChange={(e) => handleChange("type", e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá"
          value={form.price}
          onChange={(e) =>
            handleChange("price", Number(e.target.value))
          }
        />

        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) =>
            handleChange("rating", Number(e.target.value))
          }
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => handleChange("image", e.target.value)}
        />

        <button onClick={handleAdd}>Thêm</button>
      </div>

      {/* LIST */}
      <h3>Danh sách</h3>

      {list.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <b>{item.name}</b> - {item.type} - {item.price}đ ⭐{item.rating}

          <button
            style={{ marginLeft: 10 }}
            onClick={() => handleDelete(item.id)}
          >
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}