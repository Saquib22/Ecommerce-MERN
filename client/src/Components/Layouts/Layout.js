import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";


function Layout({ children,title,description,keywords,author }) {
  return (
    <div>
      {/* <h1>Layout Comp</h1> */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};
Layout.defaultProps ={
  title : 'Ecommerce-App',
  description : 'MERN Stack Project',
  keywords : 'MERN - React - Node - MongoDb',
  author : 'saquib'
}

export default Layout;
