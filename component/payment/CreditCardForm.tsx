"use client";
import React, { useEffect, useState } from "react";
import { Input, Typography } from "antd";
import { Formik, Form, FormikProps } from "formik";
import ErrorText from "./ErrorText";
import styled from "./styled/styled.module.scss";
import { formatCardNumber } from "@/utils/func/FormatCardNumber";
import { formatExpirationDate } from "@/utils/func/FormatExpirationDate";
import { ValidationSchema } from "@/utils/validation/CreditCard";
import { ICreditCardForm } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectPayment } from "@/lib/features/payment/paymentSlice";
import { actions as paymentActions } from "@/lib/features/payment/paymentSlice";
const CreditCardForm = () => {
  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const dispatch = useDispatch();
  const payment = useSelector(selectPayment);
1221
  useEffect(()=>{
    dispatch(
      paymentActions.setCardInfo({
        cardHolderName: name,
        cardNumber: cardNumber,
        expireDate: time,
        cvv: cvv,
      })
    );
  },[name, cardNumber, time, cvv, dispatch])

/*   const handleSentForm = () => { 
    dispatch(
      paymentActions.setCardInfo({
        cardHolderName: name,
        cardNumber: cardNumber,
        expireDate: time,
        cvv: cvv,
      })
    );
  }; */

  return (
    <div className={styled.container}>
      <Typography className={styled.title}>Kart Bilgileri</Typography>
      <div className={styled.border}>
        <Formik
          initialValues={{
            cardHolderName: "",
            cardNumber: "",
            expireDate: "",
            cvv: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values: ICreditCardForm, actions) => {}}
        >
          {(props: FormikProps<ICreditCardForm>) => {
            const {
              values,
              touched,
              errors,
              dirty,
              handleBlur,
              handleChange,
              handleSubmit,
              setSubmitting,
            } = props;
            return (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setSubmitting(false);
                }}
              >
                <div className={styled.container}>
                  <div>
                    <Typography>Kart Üzerindeki İsim Soyisim</Typography>
                    <Input
                      size="large"
                      name="cardHolderName"
                      value={name}
                      onChange={(event) => {
                    
                        setName(event.target.value);
                        handleChange(event);
                    
                      }}
                      onBlur={handleBlur}
                      status={
                        errors.cardHolderName && touched.cardHolderName
                          ? "error"
                          : ""
                      }
                    />
                    {errors.cardHolderName && touched.cardHolderName && (
                      <ErrorText text={errors.cardHolderName} />
                    )}
                  </div>
                  <div className={styled.rowContent}>
                    <div style={{ width: "80%" }}>
                      <Typography className={styled.text}>
                        Kart Numarası
                      </Typography>
                      <Input
                        maxLength={19}
                        size="large"
                        name="cardNumber"
                        value={formatCardNumber(`${cardNumber}`)}
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        status={
                          errors.cardNumber && touched.cardNumber ? "error" : ""
                        }
                      />
                      {errors.cardNumber && touched.cardNumber && (
                        <ErrorText text={errors.cardNumber} />
                      )}
                    </div>

                    <div>
                      <Typography className={styled.text}>
                        Son Kul. Tar.
                      </Typography>
                      <Input
                        size="large"
                        name="expireDate"
                        /* type="month" */
                        type="tel"
                        pattern="\d\d/\d\d"
                        maxLength={5}
                        value={formatExpirationDate(time)}
                        onChange={(e) => {
                          setTime(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        status={
                          errors.expireDate && touched.expireDate ? "error" : ""
                        }
                      />

                      {errors.expireDate && touched.expireDate && (
                        <ErrorText text={errors.expireDate} />
                      )}
                    </div>
                    <div>
                      <Typography className={styled.text}>CVV/CVC</Typography>
                      <Input
                        size="large"
                        name="cvv"
                        type="tel"
                        maxLength={3}
                        value={cvv}
                        onChange={(e) => {
                          setCvv(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        status={errors.cvv && touched.cvv ? "error" : ""}
                      />
                      {errors.cvv && touched.cvv && (
                        <ErrorText text={errors.cvv} />
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreditCardForm;
