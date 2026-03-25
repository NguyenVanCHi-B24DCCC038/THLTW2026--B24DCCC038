import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
    const [list, setList] = useState<any[]>([]);
    const [form, setForm] = useState({
        soHieu: "",
        hoTen: ""
    });

    // load data
    const load = async () => {
        const res = await axios.get("http://localhost:5000/vanbang");
        setList(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    // thêm
    const handleAdd = async () => {
        await axios.post("http://localhost:5000/vanbang", form);
        setForm({ soHieu: "", hoTen: "" });
        load();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Thêm văn bằng</h2>

            <input
                placeholder="Số hiệu"
                value={form.soHieu}
                onChange={(e) =>
                    setForm({ ...form, soHieu: e.target.value })
                }
            />

            <input
                placeholder="Họ tên"
                value={form.hoTen}
                onChange={(e) =>
                    setForm({ ...form, hoTen: e.target.value })
                }
            />

            <br /><br />

            <button onClick={handleAdd}>Thêm</button>
            <button onClick={load}>Reload</button>

            <h2>Danh sách</h2>

            <ul>
                {list.map((item) => (
                    <li key={item._id}>
                        {item.soVaoSo} - {item.soHieu} - {item.hoTen}
                    </li>
                ))}
            </ul>
        </div>
    );
}