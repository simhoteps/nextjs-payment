"use client";
import React from "react";
import AgreementView from "@/component/payment/AgreementView";
import ContentView from "@/component/content/ContentView";
import CreditCardForm from "@/component/payment/CreditCardForm";

const PaymentView = () => {
  return (
    <ContentView type={"payment"} >
      <CreditCardForm />
      <AgreementView />
    </ContentView>
  );
};

export default PaymentView;
