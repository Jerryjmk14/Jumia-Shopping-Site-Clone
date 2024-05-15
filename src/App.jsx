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
import Carousel from "./components/Carousel";
import carousel from "./assets/images/carousel1.png";
import article2 from "./assets/images/article2.png";
import articleimg1 from "./assets/images/article1imgone.jpg";
import articleimg2 from "./assets/images/article1imgtwo.jpg";
import articleimg3 from "./assets/images/article1imgthree.jpg";
import Aside from "./components/Aside";
import { allPictures } from "./constants/data";
import Main from "./components/Main";
import { clearanceSales } from "./constants/data";

export default function App() {
  return (
    <div className="container">
      <NavBar>
        {/* This is the top logo banna */}
        <Logo src={navImage} alt="NavImage" width="90%" />

        {/* This is the second banna*/}
        <ul>
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

        {/* This is the third banna with Search Bar */}
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
        <Carousel>
          <img src={carousel} />
        </Carousel>
        <article className="article-one">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={articleimg1} alt="article1" style={{ width: "30px" }} />
            <span>
              CALL TO ORDER
              <br />
              0700 600 000
            </span>
          </div>
          <div>
            <img src={articleimg2} alt="article2" style={{ width: "30px" }} />
            <span>Sell on Jumia</span>
          </div>
          <div>
            <img src={articleimg3} alt="article3" style={{ width: "30px" }} />
            <span>Best Deals</span>
          </div>
        </article>
        <article className="article-two">
          <img src={article2} alt="article2" />
        </article>
      </header>

      <main className="main-body">
        <div className="flashsales">
          {clearanceSales.map(({ pic, id, name }) => {
            return (
              <div key={id}>
                <img src={pic} alt={name} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>

        {allPictures.map(({ id, category, data }) => {
          return <Main key={id} category={category} data={data} />;
        })}
      </main>
    </div>
  );
}
