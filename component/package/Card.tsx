"use client";
import React from "react";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IPackageType } from "@/types/types";
import styled from "./styled/styled.module.scss";
import { actions as packageActions } from "@/lib/features/package/packageSlice";
import { useDispatch } from "react-redux";
import TagContainer from "./TagContainer";
import CardDetailItem from "./CardDetailItem";

const Card = ({
  cardInfo,
  select,
}: {
  cardInfo: IPackageType;
  select: IPackageType[];
}) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: select.find((k) => k._id === cardInfo._id)
          ? "2px solid red"
          : "none",
      }}
      className={styled.card}
      onClick={() => {
        dispatch(packageActions.setPackagesSelect(cardInfo));
      }}
    >
      <Image
        src={cardInfo.imagePath}
        alt="Paramtech Logo"
        className={styled.img}
        width={200}
        height={170}
        priority
      />
      <div className={styled.info}>
        <div className={styled.infoTitle}>
          <p className={styled.title}>{cardInfo.name}</p>
          <p className={styled.title}>{cardInfo.price} ₺</p>
        </div>
        <div className={styled.infoTitle}>
          {cardInfo.details.map((detail, k) => {
            return <CardDetailItem key={`detail_${k}`} detail={detail} />;
          })}
        </div>
        <div className={styled.infoTitle}>
          {cardInfo.tags.map((tag, k) => {
            return <TagContainer key={`tag_${k}`} tag={tag} />;
          })}
        </div>
        <Divider style={{ margin: "0px" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link className={styled.link} href={`/packages/${cardInfo._id}`}>
            Detayı Görüntüle{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
