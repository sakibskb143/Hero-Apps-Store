import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Triangle } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const Loader = () => {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <Triangle 
          visible={true}
          height="200"
          width=""
          color="#9F62F2"
          ariaLabel="triangle-loading"
        />
        <div className="loader"></div>
      </div>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-1 bg-[#F1F5E8] px-5">
        {
          navigation.state === "loading"
            ? <Loader />
            : <Outlet />
        }
      </main>

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default Root;