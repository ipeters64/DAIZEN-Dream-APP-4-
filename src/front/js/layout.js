import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { DreamMeaning } from "./pages/dream-meaning";
import { Features } from "./pages/features";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Header } from "./component/header";

import { Footer } from "./component/footer";
import backImg from "../img/DreamCloudStairway.jpg";
import { Login } from "./pages/login";
import { User } from "./pages/user";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
//the homepage's layout 
  return (
    <div
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route element={<DreamMeaning />} exact path="/dream-meaning" />
            <Route element={<Features />} exact path="/features" />
            <Route element={<Contact />} exact path="/contact" />
            <Route element={<About />} exact path="/about" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<User />} exact path="/user" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
