import React from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Radio } from "antd";
import styled from "./styled/styled.module.scss";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button
        onClick={() => {
          sessionStorage.removeItem("user");
          document.location.reload();
        }}
        type="text"
      >
        Logout
      </Button>
    ),
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <Radio.Button  className={styled.user}  onClick={(e) => e.preventDefault()} value="start">
      <UserOutlined style={{ fontSize: "18px" }} color="white" />
    </Radio.Button>
  </Dropdown>
);

export default App;
