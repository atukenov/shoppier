import PageTitle from "@/components/PageTitle";
import SEO from "@/components/SEO";
import React from "react";
import CartTable from "./components/CartTable";
import CheckOutButton from "./components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";

const CartPage = () => {
  const pageTitle = `Cart | ${process.env.siteTitle}`;
  const checkoutUrl = "randomId";

  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="Your Cart" />
      <CartTable />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton webUrl={checkoutUrl} />
        <BackToProductButton />
      </div>
    </div>
  );
};

export default CartPage;
