import { Button, DatePicker, Form, Input, Select } from "antd";

const { Option } = Select;

interface Props {
  onSubmit: (values: any) => void;
}

export default function AppointmentForm({ onSubmit }: Props) {
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item name="name" label="Tên khách hàng" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="service" label="Dịch vụ" rules={[{ required: true }]}>
        <Select>
          <Option value="Cắt tóc">Cắt tóc</Option>
          <Option value="Gội đầu">Gội đầu</Option>
          <Option value="Massage">Massage</Option>
        </Select>
      </Form.Item>

      <Form.Item name="employee" label="Nhân viên" rules={[{ required: true }]}>
        <Select>
          <Option value="Nam">Nam</Option>
          <Option value="Lan">Lan</Option>
          <Option value="Huy">Huy</Option>
        </Select>
      </Form.Item>

      <Form.Item name="time" label="Thời gian" rules={[{ required: true }]}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm" style={{ width: "100%" }} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Đặt lịch
      </Button>
    </Form>
  );
}