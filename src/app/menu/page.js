"use client";
import Card from "@/components/Card";
import { ToastContainer } from "react-toastify";

const Page = () => {
  return (
    <main className="text-center">
      <div className="link-card-grid">
        <Card />
        <ToastContainer />
      </div>
    </main>
  );
};

export default Page;
