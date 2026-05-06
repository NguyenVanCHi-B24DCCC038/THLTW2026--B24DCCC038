import { Form, Input, Select, DatePicker, Button } from "antd";
import { getTasks, saveTasks } from "../../LocalStorage";
import { Task } from "../../types1";
import dayjs, { Dayjs } from "dayjs";

interface FormValues {
    title: string;
    deadline: Dayjs;
    priority: "high" | "medium" | "low";
}

export default function TaskForm() {
    const [form] = Form.useForm<FormValues>();

    const onFinish = (values: FormValues) => {
        const tasks = getTasks();

        const newTask: Task = {
            id: Date.now().toString(),
            title: values.title,
            deadline: values.deadline.format("YYYY-MM-DD"),
            priority: values.priority,
            status: "todo"
        };

        saveTasks([...tasks, newTask]);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="deadline" label="Deadline" rules={[{ required: true }]}>
                <DatePicker />
            </Form.Item>

            <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
                <Select
                    options={[
                        { value: "high", label: "High" },
                        { value: "medium", label: "Medium" },
                        { value: "low", label: "Low" }
                    ]}
                />
            </Form.Item>

            <Button htmlType="submit">Add</Button>
        </Form>
    );
}