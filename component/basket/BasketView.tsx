"use client";

import React from "react";
import BasketItem from "./BasketItem";
import { Button, Typography } from "antd";
import styled from "./styled.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectPackages } from "@/lib/features/package/packageSlice";
import { actions as packageActions } from "@/lib/features/package/packageSlice";
import { actions as paymentActions } from "@/lib/features/payment/paymentSlice";


const BasketView = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const packages = useSelector(selectPackages);
  const ids =packages.selectPackage.map(item => item._id)
  return (
    <div className={styled.basketContainer}>
      <div className={styled.basketItemContainer}>
        <Typography className={styled.title}>Sepetteki Paketler</Typography>
        {packages.selectPackage.map((item) => {
          return (
            <BasketItem
              key={`basketItem_${item._id}`}
              item={item}
              onClick={() => {
                dispatch(packageActions.setPackagesSelect(item));
              }}
            />
          );
        })}
      </div>
      {type === "payment" ? (
        <Button
          onClick={() => {
            console.log("object")
           dispatch(paymentActions.setPaymentSelect({packageIds:ids,totalAmount:packages.totalPrice}) )
          }}
          disabled={packages.selectPackage.length === 0}
          size="large"
          type="primary"
        >
          Ödeme Yap
        </Button>
      ) : (
        <Button
          href={`/payment/`}
          disabled={packages.selectPackage.length === 0}
          size="large"
          type="primary"
        >
          Devam Et
        </Button>
      )}
    </div>
  );
};

export default BasketView;
