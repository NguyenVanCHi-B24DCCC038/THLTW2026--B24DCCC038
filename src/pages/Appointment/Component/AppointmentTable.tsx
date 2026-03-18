import { Table, Tag } from "antd";
import { Appointment } from "../types";

interface Props {
  data: Appointment[];
}

export default function AppointmentTable({ data }: Props) {
  const columns = [
    { title: "Khách hàng", dataIndex: "name" },
    { title: "Dịch vụ", dataIndex: "service" },
    { title: "Nhân viên", dataIndex: "employee" },
    { title: "Thời gian", dataIndex: "time" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (s: string) => (
        <Tag color={s === "pending" ? "orange" : s === "done" ? "green" : "red"}>
          {s}
        </Tag>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
}