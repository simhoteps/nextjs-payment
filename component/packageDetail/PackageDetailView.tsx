import React from "react";
import { IPackageType } from "@/types/types";
import { Typography } from "antd";
import Image from "next/image";
import styled from "./styled/styled.module.scss";
import TagContainer from "../package/TagContainer";

const PackageDetailView = ({ cardInfo }: { cardInfo: IPackageType }) => {
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography>
          {cardInfo.name} <b>| {cardInfo.price} ₺</b>
        </Typography>

        <Image
          src={cardInfo.imagePath}
          alt="Paramtech Detail Image"
          className={styled.detailImg}
          width={200}
          height={240}
          priority
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div className={styled.rowSpaceContent}>
          <Typography>Detay Açıklama</Typography>
          <div className={styled.rowContent}>
            {cardInfo.tags.map((tag, k) => {
              return <TagContainer key={`tag_${k}`} tag={tag} />;
            })}
          </div>
        </div>
        <div className={styled.border}>
          <Typography>{cardInfo.moreInformation}</Typography>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailView;
