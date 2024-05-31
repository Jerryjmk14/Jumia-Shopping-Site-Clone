import React from "react";
import NavBar from "./components/NavBar";
import navImage from "./assets/images/TOP-Nav.gif";
import "./components/jumia.css";
import Logo from "./components/Logo";
import star from "./assets/images/starr.png";
import logo from "./assets/images/jumia-logo.png";
import { FaShieldAlt } from "react-icons/fa";
import SearchBar from "./components/SearchBar";
import SearchInput from "./components/SearchInput";
import { CiUser } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import article2 from "./assets/images/article2.png";
import Aside from "./components/Aside";
import { allPictures } from "./constants/data";
import Main from "./components/Main";
import { clearanceSales } from "./constants/data";
import Footer from "./components/Footer";
import AsideTwo from "./components/AsideTwo";
import Carousel from "./components/Carousel";
import FlashSales from "./components/FlashSales";

export default function App() {
  return (
    <div className="wrapper" style={{}}>
      <NavBar>
        {/* This is the top logo navbar */}
        <Logo src={navImage} alt="NavImage" width="90%" />

        {/* This is the second navbar*/}
        <ul style={{ marginBottom: "0px" }}>
          <li>
            <Logo src={star} alt="star" width="15px" />
            <span className="nav-span">Sell on Jumia</span>
          </li>

          <li>
            <Logo src={logo} alt="logo" width="70px" />
            <span className="nav-pay" title="Pay">
              <FaShieldAlt />
              PAY
            </span>
          </li>
        </ul>

        {/* This is the third navbar with Search Bar */}
        <SearchBar>
          <Logo src={logo} alt="logo" width="160px" />

          <SearchInput
            width="95%"
            padding="15px"
            children="Search"
            color="#E07E1B"
          />

          <div className="account">
            <CiUser style={{ fontSize: "25px" }} />
            <span>Account</span>
            <FaChevronUp />
          </div>

          <div className="help">
            <IoIosHelpCircleOutline style={{ fontSize: "25px" }} />
            <span>Help</span>
            <FaChevronUp />
          </div>

          <div className="cart">
            <IoCartOutline style={{ fontSize: "25px" }} />
            <span>Cart</span>
          </div>
        </SearchBar>
      </NavBar>

      {/* This is the header */}
      <header className="header">
        <aside className="aside">
          <Aside />
        </aside>

        <Carousel />

        <article className="article-one">
          <AsideTwo />
        </article>

        <article className="article-two">
          <img src={article2} alt="article2" />
        </article>
      </header>

      {/* This is the main body */}
      <main className="main-body">
        <FlashSales />

        {allPictures.map(({ id, category, data }) => {
          return <Main id={id} category={category} data={data} key={id} />;
        })}
      </main>

      {/* This is the Footer */}
      <footer className="footer">
        <section className="footer-dark">
          <Logo
            src={logo}
            alt="logo"
            width="160px"
            color="white"
            padding="20px"
          />
          <SearchInput
            width="95%"
            padding="15px"
            children="Search"
            color="#E07E1B"
          />
        </section>
        <section className="footer-gray">
          <Footer />
        </section>
      </footer>
    </div>
  );
}
