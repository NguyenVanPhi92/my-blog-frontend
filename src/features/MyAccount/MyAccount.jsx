import React from "react";
import auth from "../../assets/images/author.png";
import Select from "../../components/Form-ctrl/Select/Select";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FcGoogle, FcUnlock } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "./style.scss";
import NotFound from "../../components/NotFound/NotFound";

const MyAccount = () => {
  const arrValue = ["1", "3", "2", "5"];

  return (
    <>
      <NotFound />
      {/* <div className="container">
        <div className="form-account">
          <div className="left">
            <h3>Thông tin cá nhân</h3>
            <div className="row">
              <div className="avatar">
                <img src={auth} alt="" />
              </div>

              <div className="name">
                <Input label="Họ & Tên" />
                <Input label="Nickname" />
              </div>
            </div>

            <div className="row-info">
              <div className="date-group">
                <label htmlFor="" style={{ fontSize: "1.2rem" }}>
                  Ngày sinh
                </label>
                <div className="selector">
                  <Select
                    name="Ngày Sinh"
                    valueDefault="Ngày"
                    valueChoose={arrValue}
                  />
                  <Select name="" valueDefault="Ngày" valueChoose={arrValue} />
                  <Select name="" valueDefault="Ngày" valueChoose={arrValue} />
                </div>
              </div>
              <div className="radio-group">
                <label style={{ fontSize: "1.2rem" }}>Giới tính</label>
                <div className="radio">
                  <Input type="radio" label="nam" gender="gender" />
                  <Input type="radio" label="nữ" gender="gender" />
                  <Input type="radio" label="Khác" gender="gender" />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="info-group">
              <h3>Số điện thoại và Email</h3>
              <div className="row">
                <div className="info-text">
                  <div className="phone">
                    <div className="info">
                      <div className="icon">
                        <FcPhoneAndroid />
                      </div>
                      <p>
                        Số điện thoại: <span>0867876112</span>
                      </p>
                    </div>
                    <button>Cập nhật</button>
                  </div>
                </div>

                <div className="info-text">
                  <div className="email">
                    <div className="info">
                      <div className="icon">
                        <MdEmail />
                      </div>
                      <p>
                        Địa chỉ email:{" "}
                        <span>nguyenvanphidmx123455@gmail.com</span>
                      </p>
                    </div>
                    <button>Cập nhật</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-group">
              <h3>Bảo Mật</h3>
              <div className="row">
                <div className="info-text">
                  <div className="password">
                    <div className="info">
                      <div className="icon">
                        <FcUnlock />
                      </div>
                      <span>Đổi mật khẩu</span>
                    </div>
                    <button>Cập nhật</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-group">
              <h3>Liên kết mạng xã hội</h3>
              <div className="row">
                <div className="info-text">
                  <div className="google">
                    <div className="info">
                      <div className="icon">
                        <FcGoogle />
                      </div>
                      <span>Google</span>
                    </div>
                    <button>Cập nhật</button>
                  </div>
                </div>

                <div className="info-text">
                  <div className="facebook">
                    <div className="info">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <span>Facebook</span>
                    </div>
                    <button>Cập nhật</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MyAccount;
