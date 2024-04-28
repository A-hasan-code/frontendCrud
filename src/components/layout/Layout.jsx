import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <div className="app">
        <Sidebar />
        <main className="content">
          <Header />

          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
