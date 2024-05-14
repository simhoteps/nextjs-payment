"use client";
import React from "react";
import dynamic from "next/dynamic";
import styled from "./styled.module.scss";
import BasketView from "../basket/BasketView";
/* const BasketView = dynamic(() => import("@/component/basket/BasketView"), {
  ssr: false,
});
 */
const ContentView = ({type,children}:{type:string; children:React.ReactNode}) => {
  return (
    <div className={styled.paymentContainer}>
      <div className={styled.main}>
      {children}
      </div>
      <div className={styled.main}>
        <BasketView  type={type}/>
      </div>
    </div>
  );
};

export default ContentView;
