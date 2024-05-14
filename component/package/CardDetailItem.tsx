import Icon from "@ant-design/icons";
import React from "react";
import { DotsSvg } from "../icons/icons";
import styled from "./styled/styled.module.scss";

const CardDetailItem = ({ detail }: { detail: string }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <Icon component={DotsSvg} style={{ fontSize: "9px" }} />
      <p className={styled.detailText}>{detail}</p>
    </div>
  );
};

export default CardDetailItem;
