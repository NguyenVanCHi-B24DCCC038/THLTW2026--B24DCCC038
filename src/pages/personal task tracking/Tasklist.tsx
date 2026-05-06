import { Table, Input } from "antd";
import { useState } from "react";
import { getTasks } from "../../LocalStorage";
import { Task } from "../../types1";

export default function TaskList() {
    const [tasks] = useState<Task[]>(getTasks());
    const [search, setSearch] = useState("");

    const filtered = tasks.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Input placeholder="Search..." onChange={e => setSearch(e.target.value)} />

            <Table<Task>
                dataSource={filtered}
                rowKey="id"
                columns={[
                    { title: "Name", dataIndex: "title" },
                    { title: "Deadline", dataIndex: "deadline" },
                    { title: "Priority", dataIndex: "priority" },
                    { title: "Status", dataIndex: "status" },
                ]}
            />
        </>
    );
}