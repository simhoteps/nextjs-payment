"use client";
import React from "react";
import { Button, Input, Typography } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import styled from "./styled/styled.module.scss";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { actions as userActions } from "@/lib/features/user/userSlice";
import { useDispatch } from "react-redux";

interface IForm {
  email: string;
  userCode: string;
}

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz mail adresi").required("Gerekli Alan"),
  userCode: Yup.string()
    .min(7, "En az 7 karakter uzunluğunda olmalı")
    .required("Gerekli Alan"),
});

const LoginView = () => {
  const dispatch = useDispatch(); 
  return (
    <div className={styled.main}>
      <Formik
        initialValues={{
          email: "",
          userCode: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values: IForm, actions) => {}}
      >
        {(props: FormikProps<IForm>) => {
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
                  <Typography>Email Adresiniz</Typography>
                  <Input
                    size="large"
                    prefix={<MailOutlined />}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={errors.email && touched.email ? "error" : ""}
                  />
                  {errors.email && touched.email && (
                    <Typography style={{ color: "#E22323", fontSize: "12px" }}>
                      {errors.email}
                    </Typography>
                  )}
                </div>
                <div>
                  <Typography className={styled.text}>
                    Kullanıcı Kodunuz
                  </Typography>
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    name="userCode"
                    value={values.userCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={errors.userCode && touched.userCode ? "error" : ""}
                  />
                  {errors.userCode && touched.userCode && (
                    <Typography style={{ color: "#E22323", fontSize: "12px" }}>
                      {errors.userCode}
                    </Typography>
                  )}
                </div>
                <Button
                  disabled={
                    !dirty ||
                    !(errors.email === undefined) ||
                    !(errors.userCode === undefined)
                  }
                  onClick={() => {
              /*       store.dispatch(fetchUser({mail: values.email,code: values.userCode})) */
                   dispatch(userActions.setUser({email: values.email,userCode: values.userCode}))
                
              /*  fetchGet({
                      mail: values.email,
                      code: values.userCode,
                    });  */
                  }}
                  block
                  size="large"
                  type="primary"
                >
                  Devam et
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginView;
