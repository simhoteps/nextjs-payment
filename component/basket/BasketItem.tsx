import React from 'react'
import { IPackageType } from '@/types/types';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import styled from "./styled.module.scss";

const BasketItem = ({item,onClick}:{item: IPackageType;onClick:()=> void}) => {
  return (
    <div key={`basketItem_${item._id}`} className={styled.basketItem}>
    <div className={styled.rowSpaceContent}>
      <Typography.Text style={{ fontSize: "12px" }}>
        {item.name}
      </Typography.Text>
      <Typography style={{ fontSize: "12px", flexWrap: "nowrap" }}>
        <b>{item.price}</b>₺
      </Typography>
    </div>

    <div style={{ gap: "0px" }} className={styled.rowContent}>
      <Button
        className={styled.iconButton}
        onClick={onClick}
      >
        <DeleteOutlined />
      </Button>
      <Button
        className={styled.iconButton}
        href={`/packages/${item._id}`}
      >
        <FolderOutlined />
      </Button>
    </div>
  </div>
  )
}

export default BasketItem