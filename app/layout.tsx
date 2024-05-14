"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import styled from "./page.module.css";
import Navbar from "@/component/navbar/NavbarView";
import StoreProvider from "./StoreProvider";
import LoginView from "@/component/login/LoginView";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        
        {sessionStorage.getItem("user") ? (
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
