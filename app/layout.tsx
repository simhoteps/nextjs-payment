"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import styled from "./page.module.css";
import Navbar from "@/component/navbar/NavbarView";
import StoreProvider from "./StoreProvider";
import LoginView from "@/component/login/LoginView";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user") || "";
    setUser(storedUser);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        
        {user !==""? (
            <div>
              <Navbar />
              <main className={styled.content}>{children}</main>
            </div>
          ) : (
            <LoginView />
          )} 
        </StoreProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
