import { Input, Form, Button } from "antd";
import { onSignin } from "../data/api/login";
import { ApiResponse, ErrorCode } from "../data/model";
import { useContext, useEffect, useState } from "react";
import { AuthDispatchContext } from "../data/context";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <span>
    {label}
    {required && <span className="text-[#ff4d4f] pl-1 leading-[14px]">*</span>}
  </span>
);

const LoginPage = () => {
  const [userExisted, setUserExisted] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [form] = Form.useForm();
  const dispatch = useContext(AuthDispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userExisted) {
      form.validateFields(["username"]);
    }

    if (!validPassword) {
      form.validateFields(["password"]);
    }
  }, [userExisted, validPassword]);

  const onFinish = async (values: any) => {
    const res = (await onSignin(
      values.username,
      values.password
    )) as ApiResponse;

    if (res.statusCode === 200) {
      dispatch({ type: "auth:login", data: res.data });
      navigate("/");
    }

    if (res.statusCode === 400) {
      if (res.reasonCode === ErrorCode.InvalidUser) {
        setUserExisted(false);
      } else if (res.reasonCode === ErrorCode.InvalidPass) {
        setValidPassword(false);
      }
    }
  };

  const usernameValidator = () => {
    if (!userExisted) return Promise.reject("Invalid user");
    return Promise.resolve();
  };

  const passValidator = () => {
    if (!validPassword) return Promise.reject("Invalid password");
    return Promise.resolve();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-3/5 h-full flex items-center p-12 bg-teal-300">
        <img src="src/assets/images/Doctor.svg" alt="doctor" />
      </div>
      <div className="w-2/5 flex items-center p-8">
        <Form
          name="basic"
          className="w-full"
          layout="vertical"
          form={form}
          size="large"
          onFinish={onFinish}
          requiredMark={customizeRequiredMark}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            className="mb-[20px]"
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { validator: usernameValidator, message: "User is not existed" },
            ]}
          >
            <Input onChange={() => setUserExisted(true)} />
          </Form.Item>

          <Form.Item<FieldType>
            className="mb-8"
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { validator: passValidator, message: "Invalid password" },
            ]}
          >
            <Input.Password onChange={() => setValidPassword(true)} />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#1677ff] w-28"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
