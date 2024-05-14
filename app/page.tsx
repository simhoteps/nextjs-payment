"use client";
import React from "react";
import styled from "@/component/package/styled/styled.module.scss"
import { Divider } from "antd";
import { data } from "@/data";
import { useSelector } from "react-redux";
import { selectPackages } from "@/lib/features/package/packageSlice";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/component/package/Card"), { ssr: false });
const TotalView = dynamic(() => import("@/component/package/TotalView"), {
  ssr: false,
});

const HomeView = () => {
  const packages = useSelector(selectPackages);
  const select = packages;

  return (
    <div className={styled.main}>
      <div className={styled.gridContainer}>
        {data.map((item) => {
          return (
            <Card
              key={item._id}
              cardInfo={item}
              select={select.selectPackage}
            />
          );
        })}
      </div>
      <Divider style={{ margin: "4px" }}></Divider>
      <TotalView />
    </div>
  );
};

export default HomeView;
