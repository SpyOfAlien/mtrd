import CheckedIcon from "./check";

const ReportPdf = () => {
  return (
    <div
      id="report-pdf"
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        width: "21cm",
        height: "29.7cm",
        padding: "24px",
      }}
      className="report"
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
          className="header"
        >
          <img src="src/assets/images/logo.svg" width="50px" height="50px" />
          <div>
            <h1
              style={{
                fontSize: "16px",
                lineHeight: "16px",
                color: "#A62D8C",
                fontWeight: 700,
              }}
            >
              BỆNH VIỆN SẢN NHI TỈNH PHÚ THỌ
            </h1>
            <h3
              style={{
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: 700,
                color: "#5EB257",
                padding: "2px 0",
              }}
            >
              Nâng niu hạnh phúc, chắp cánh tương lai
            </h3>
            <p
              style={{
                color: "#2424F5",
                fontSize: "10px",
                lineHeight: "12px",
                letterSpacing: "0.24px",
              }}
            >
              Nông Trang, TP Việt Trì, Phú Thọ
            </p>
            <p
              style={{
                color: "#2424F5",
                fontSize: "10px",
                lineHeight: "12px",
                letterSpacing: "0.24px",
              }}
            >
              Điện thoại: 0210 6559 999
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              border: "2px solid black",
              padding: "4px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              <span style={{ width: "80px", display: "inline-block" }}>
                Số hồ sơ:
              </span>
              <span style={{ color: "#EA3525" }}>23030229</span>
            </p>
            <p style={{ fontWeight: "bold" }}>
              <span style={{ width: "80px", display: "inline-block" }}>
                Mã số lam:
              </span>
              <span>523-2023</span>
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "4px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#0000BB",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "16px",
          }}
        >
          PHIẾU XÉT NGHIỆM TẾ BÀO CỔ TỬ CUNG (ThinPAS Test)
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "16px",
            color: "#2020F6",
          }}
        >
          Mẫu bệnh phẩm được xử lý bằng máy CellSolution CS-F50 (chứng chỉ FDA -
          Hoa Kỳ)
        </h2>
      </section>

      <section style={{ width: "100%", marginBottom: "4px" }}>
        <p style={{ fontSize: "10px", lineHeight: "14px" }}>
          <span style={{ display: "inline-block", width: "50%" }}>
            <span style={{ marginRight: "2px" }}>Họ tên:</span>
            <span style={{ textTransform: "uppercase", fontWeight: 600 }}>
              TỐNG THỊ KIM THANH
            </span>
          </span>
          <span>
            <span style={{ marginRight: "2px" }}>Năm sinh:</span>
            <span>1997</span>
          </span>
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14px" }}>
          <span style={{ marginRight: "2px" }}>Địa chỉ:</span>
          <span>KHU NÚI MIẾU, Thị trấn Phong Châu, H. Phù Ninh, Phú Thọ</span>
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14px" }}>
          <span style={{ marginRight: "2px" }}>Điện thoại:</span>
          <span>02929123123</span>
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14px" }}>
          <span style={{ display: "inline-block", width: "50%" }}>
            <span style={{ marginRight: "2px" }}>Khoa phòng:</span>
            <span>Sản 3</span>
          </span>
          <span>
            <span style={{ marginRight: "2px" }}>Bác sĩ chỉ định:</span>
            <span style={{ fontWeight: 600, textTransform: "uppercase" }}>
              BS Hà Mạnh Hùng
            </span>
          </span>
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14px" }}>
          <span style={{ marginRight: "2px" }}>Chuẩn đoán lâm sàng:</span>
          <span>Khối u hạ vị TD khối u buồng trứng/ THA</span>
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14px", display: "flex" }}>
          <span style={{ marginRight: "20px" }}>Đánh giá lam: </span>
          <CheckedIcon
            checked={true}
            styles={{ marginRight: "20px" }}
            size="medium"
          >
            Đạt
          </CheckedIcon>
          <CheckedIcon styles={{ marginRight: "20px" }} size="medium">
            Không đạt
          </CheckedIcon>
          <span>
            <span style={{ marginRight: "2px" }}>Lý do:</span>
            <span>Khối u hạ vị TD khối u buồng trứng/ THA</span>
          </span>
        </p>
      </section>

      <section style={{ marginBottom: "4px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#BF000B",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "16px",
          }}
        >
          KẾT QUẢ TẾ BÀO HỌC CỔ TỬ CUNG THEO HỆ THỐNG BETHESDA2014
        </h1>

        <CheckedIcon
          styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
          size="large"
          checked={true}
        >
          PHIẾN ĐỒ CÓ TẾ BÀO BÌNH THƯỜNG
        </CheckedIcon>
        <CheckedIcon
          styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
          size="large"
          checked={true}
        >
          NHIỄM VI SINH VẬT
        </CheckedIcon>
        <div style={{ display: "flex", paddingLeft: "20px" }}>
          <div style={{ width: "165px" }}>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Trichomonas vaginalis.
            </CheckedIcon>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Leptothrix
            </CheckedIcon>
          </div>

          <div style={{ width: "120px" }}>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Nấm Candida spp.
            </CheckedIcon>

            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              HSV
            </CheckedIcon>
          </div>
          <div style={{ width: "130px" }}>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Bacterial Vaginosis
            </CheckedIcon>

            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Actinomyces
            </CheckedIcon>
          </div>

          <div>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Tạp khuẩn
            </CheckedIcon>
            <CheckedIcon
              styles={{
                color: "#2525F7",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Khác
            </CheckedIcon>
          </div>
        </div>
        <CheckedIcon
          styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
          size="large"
          checked={true}
        >
          TẾ BÀO LÀNH TÍNH DO:
        </CheckedIcon>
        <div style={{ display: "flex", paddingLeft: "20px" }}>
          <div style={{ width: "165px" }}>
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Phản ứng viêm
            </CheckedIcon>
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Viêm teo(Atrophy Vginites)
            </CheckedIcon>
          </div>
          <div style={{ width: "120px" }}>
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Xạ trị
            </CheckedIcon>{" "}
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Khác
            </CheckedIcon>
          </div>
          <div style={{ width: "62px" }}>
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              IUD
            </CheckedIcon>
          </div>
          <div>
            <CheckedIcon
              styles={{
                fontSize: "12px",
              }}
              size="medium"
              checked={true}
            >
              Viêm nang hạt CTC-ÂĐ mạn tính
            </CheckedIcon>
          </div>
        </div>

        <CheckedIcon
          styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
          size="large"
          checked={true}
        >
          TẾ BÀO NỘI MẠC TỬ CUNG NGOÀI CHU KỲ Ở NGƯỜI &gt; 40T
        </CheckedIcon>
        <div style={{ display: "flex", gap: "16px" }}>
          <div
            style={{
              width: "54%",
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            <CheckedIcon
              styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
              size="large"
              checked={true}
            >
              TẾ BÀO BIỂU MÔ VẢY BẤT THƯỜNG
            </CheckedIcon>

            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tế bào biểu mô vảy không điển hình ý nghĩa chưa xác định (ASCUS)
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tế bào biểu mô vảy không điển hình, chưa loại trừ HSIL (ASC-H)
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tổn thương nội biểu mô tế bào vảy độ thấp (LSIL) và/ hoặc tế bào
              bóng
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tổn thương nội biểu mô tế bào vảy độ cao (HSIL)
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Ung thư biểu mô tế bào vảy
            </CheckedIcon>
          </div>
          <div
            style={{
              width: "46%",
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            <CheckedIcon
              styles={{ color: "#0A0A83", fontWeight: 600, fontSize: "12px" }}
              size="large"
              checked={true}
            >
              TẾ BÀO BIỂU MÔ VẢY BẤT THƯỜNG
            </CheckedIcon>

            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tế bào tuyến không điển hình ý nghĩa chưa xác định (AGC)
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Tế bào tuyến không điển hình liên quan tân sản ác tính (AGC-AIS)
            </CheckedIcon>
            <CheckedIcon
              styles={{ fontSize: "9px" }}
              size="medium"
              checked={true}
            >
              Ung thư biểu mô tuyến (Adeno Carcinoma)
            </CheckedIcon>
            <CheckedIcon
              styles={{
                color: "#EB4334",
                fontWeight: 600,
                fontSize: "12px",
                marginTop: "auto",
              }}
              size="medium"
              checked={true}
            >
              UNG THƯ TẾ BÀO KHÔNG ĐỊNH LOẠI
            </CheckedIcon>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "4px" }}>
        <h3
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          KẾT LUẬN:
        </h3>
        <p
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          PHIẾN ĐỒ TẾ BÀO TRONG GIỚI HẠN BÌNH THƯỜNG
        </p>
      </section>
      <section style={{ marginBottom: "4px" }}>
        <h3
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          KIẾN NGHỊ:
        </h3>
        <p></p>
      </section>

      <section
        style={{
          height: "180px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ height: "100%", width: "238px", background: "gray" }}
        ></div>
        <div
          style={{ height: "100%", width: "238px", background: "gray" }}
        ></div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "4px 24px",
        }}
      >
        <div style={{ height: "auto" }}>
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "14px",
            }}
          >
            Phú thọ, ngày 02 tháng 03 năm 2023
          </p>
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "14px",
            }}
          >
            Bác sĩ đọc kết quả
          </p>
          <div style={{ height: "40px" }}></div>
          <h6
            style={{
              fontWeight: 600,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            BSCKI. ĐỖ THỊ HƯƠNG GIANG
          </h6>
        </div>
      </section>
    </div>
  );
};

export default ReportPdf;
