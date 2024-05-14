"use client";
import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import styled from "./styled/styled.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/features/user/userSlice";
import UserMenu from "./UserMenu";
import Link from "next/link";

const Navbar = () => {
  const user = useSelector(selectUser);
  return (
    <nav className={styled.navbar}>
      <Link href={`/`}>
        <Image
          src="/paramtechLogo.svg"
          alt="Paramtech Logo"
          width={100}
          height={28}
          priority
        />
      </Link>

      <div className={styled.userContainer}>
        <UserMenu />
        <Typography>{user.loginForm.email}</Typography>
      </div>
    </nav>
  );
};

export default Navbar;
