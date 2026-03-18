import { useState } from "react";
import { Card, message } from "antd";
import AppointmentForm from "./Component/AppointmentForm";
import AppointmentTable from "./Component/AppointmentTable";
import { Appointment } from "./types";

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleSubmit = (values: any) => {
    const time = values.time.format("YYYY-MM-DD HH:mm");

    const conflict = appointments.find(
      (a) => a.employee === values.employee && a.time === time
    );

    if (conflict) {
      message.error("Nhân viên đã có lịch!");
      return;
    }

    const newAppt: Appointment = {
      id: Date.now(),
      name: values.name,
      service: values.service,
      employee: values.employee,
      time,
      status: "pending",
    };

    setAppointments([...appointments, newAppt]);
    message.success("Đặt lịch thành công!");
  };

  return (
    <Card title="📅 Đặt lịch dịch vụ">
      <AppointmentForm onSubmit={handleSubmit} />

      <div style={{ marginTop: 24 }}>
        <AppointmentTable data={appointments} />
      </div>
    </Card>
  );
}