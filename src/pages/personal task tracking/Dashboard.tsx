import { Card } from "antd";
import { getTasks } from "../../LocalStorage";
import { Task } from "../../types1";

export default function Dashboard() {
    const tasks: Task[] = getTasks();

    const total = tasks.length;
    const done = tasks.filter(t => t.status === "done").length;
    const overdue = tasks.filter(
        t => new Date(t.deadline) < new Date() && t.status !== "done"
    ).length;

    return (
        <div style={{ display: "flex", gap: 16 }}>
            <Card title="Total">{total}</Card>
            <Card title="Done">{done}</Card>
            <Card title="Overdue">{overdue}</Card>
        </div>
    );
}