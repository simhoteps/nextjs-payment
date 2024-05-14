"use client";
import { Button, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "./styled/styled.module.scss";
import { selectPackages } from "@/lib/features/package/packageSlice";

const TotalView = () => {
  const packages = useSelector(selectPackages);
  const totalPrice = packages.totalPrice;
  return (
    <div className={styled.amountContiner}>
      <Typography style={{ flexWrap: "nowrap" }}>
        Seçilen Paket Tutarı: <b>{totalPrice===0 ?0:totalPrice} ₺</b>
      </Typography>

      <Button
        href={`/payment/`}
        size="large"
        type="primary"
      >
        Devam Et
      </Button>
    </div>
  );
};


export default TotalView;


