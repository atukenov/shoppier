"use client";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="flex flex-col justify-between min-h-screen">
            <Nav />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
