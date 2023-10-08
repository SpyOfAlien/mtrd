import {
  AutoComplete,
  Button,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
} from "antd";
import { useState } from "react";
import ReportPdf from "../components/report-pdf";
import { onGetPrinters } from "../data/api/login";
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";

const options: Options = {
  method: "open",
  resolution: Resolution.HIGH,
  filename: "baotest",
  canvas: {
    qualityRatio: 1,
  },
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};

// you can use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("report-pdf");

const ReportPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <div className="w-4/5">
        <div>
          <Divider orientation="center" plain>
            Thông tin hành chính bệnh nhân
          </Divider>

          <Form className="flex">
            <div className="w-1/2">
              <div className="flex">
                <Form.Item label="Mã số TB">
                  <Input />
                </Form.Item>
                <span>/</span>
                <Form.Item>
                  <Input />
                </Form.Item>
                <Form.Item label="Mã bệnh án">
                  <Input />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Họ tên">
                  <AutoComplete
                    popupMatchSelectWidth={252}
                    style={{ width: 300 }}
                  >
                    <Input.Search placeholder="Nhập để tìm kiếm" enterButton />
                  </AutoComplete>
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Địa chỉ">
                  <Input />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Chuẩn đoán lâm sàng">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="BS chỉ định">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Ngày lấy mẫu">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Ngày nhận mẫu">
                  <DatePicker />
                </Form.Item>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex">
                <Form.Item label="Số phiếu">
                  <Input />
                </Form.Item>
                <Form.Item label="Ngày đọc">
                  <DatePicker />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Năm sinh">
                  <Input />
                </Form.Item>
                <Form.Item label="Tuổi">
                  <Input />
                </Form.Item>
                <Form.Item label="PARA">
                  <Input />
                </Form.Item>
                <Form.Item label="Số ĐT">
                  <Input />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Ngề nghiệp">
                  <Input />
                </Form.Item>
                <Form.Item label="Ngày kinh cuối">
                  <DatePicker />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Kết quả PAP trước">
                  <Input />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Đơn vị gửi BP">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Khoa">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Bác sĩ đọc kết quả">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
        <div>
          <Divider orientation="center" plain>
            Tính chất bệnh phẩm
          </Divider>
        </div>
        <div>
          <Divider orientation="center" plain>
            Kết quả tế bào học cổ tử cung theo hệ thống BETHESDA 2014
          </Divider>
        </div>
        <div>
          <Divider orientation="center" plain>
            Kết luận và kiến nghị
          </Divider>
        </div>
      </div>
      <div className="w-1/5">
        <Button onClick={() => setIsModalOpen(!isModalOpen)}> Preivew </Button>
      </div>

      <Modal
        title="Basic Modal"
        width="24cm"
        className="preview-report"
        style={{ height: "calc(100% - 24px)", top: "24px" }}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={(_) => (
          <>
            <Button onClick={() => setIsModalOpen(false)}>Save</Button>
            <Button onClick={() => generatePDF(getTargetElement, options)}>
              Print
            </Button>
          </>
        )}
      >
        <ReportPdf />
      </Modal>
    </div>
  );
};

export default ReportPage;
