import bath1 from "../assets/images/Bathing_soap.png";
import bath2 from "../assets/images/shampoo.png";
import bath3 from "../assets/images/Makeup.png";
import bath4 from "../assets/images/shampoo.png";
import bath5 from "../assets/images/Hair_accessories.png";
import bath6 from "../assets/images/Face_care.png";
import fashion1 from "../assets/images/Fashion1.png";
import fashion2 from "../assets/images/Fashion2.png";
import fashion3 from "../assets/images/fashion3.png";
import fashion4 from "../assets/images/Fashion4.png";
import fashion5 from "../assets/images/Fashion5.png";
import fashion6 from "../assets/images/Fashion6.png";
import food1 from "../assets/images/Rice.png";
import food2 from "../assets/images/Toiletries.png";
import food3 from "../assets/images/Juices.png";
import food4 from "../assets/images/Liquor.png";
import food5 from "../assets/images/Wines.png";
import food6 from "../assets/images/Soft_Drinks.png";
import mobile1 from "../assets/images/CellPhone.png";
import mobile2 from "../assets/images/Mobile6.png";
import mobile3 from "../assets/images/iphones.png";
import mobile4 from "../assets/images/Phones5.png";
import mobile5 from "../assets/images/smartphones.png";
import mobile6 from "../assets/images/Tablets.png";
import sales1 from "../assets/images/flashsales/flashsales1.gif";
import sales2 from "../assets/images/flashsales/flashsales2.png";
import sales3 from "../assets/images/flashsales/flashsales3.png";
import sales4 from "../assets/images/flashsales/flashsales4.png";
import sales5 from "../assets/images/flashsales/flashsales5.png";
import sales6 from "../assets/images/flashsales/flashsales6.png";
import sales7 from "../assets/images/flashsales/flashsales7.png";
import sales8 from "../assets/images/flashsales/flashsales8.png";
import sales9 from "../assets/images/flashsales/flashsales9.png";
import sales10 from "../assets/images/flashsales/flashsales10.png";
import sales11 from "../assets/images/flashsales/flashsales11.png";
import sales12 from "../assets/images/flashsales/flashsales12.png";
import picAside1 from "../assets/images/article1imgone.jpg";
import picAside2 from "../assets/images/article1imgtwo.jpg";
import picAside3 from "../assets/images/article1imgthree.jpg";

export const allPictures = [
  {
    id: 1,
    category: "Toiletries",
    data: [
      { name: "bathsoap", pic: bath1 },
      { name: "fragrance", pic: bath2 },
      { name: "toiletries", pic: bath3 },
      { name: "shampoo", pic: bath4 },
      { name: "hair care", pic: bath5 },
      { name: "face care", pic: bath6 },
    ],
  },
  {
    id: 2,
    category: "Fashion Wears",
    data: [
      { name: "women's wears", pic: fashion1 },
      { name: "kiddies", pic: fashion2 },
      { name: "men's shoes", pic: fashion3 },
      { name: "wristwatches", pic: fashion4 },
      { name: "men's wears", pic: fashion5 },
      { name: "women's shoes", pic: fashion6 },
    ],
  },
  {
    id: 3,
    category: "Food and Drinks",
    data: [
      { name: "rice", pic: food1 },
      { name: "household cleaning", pic: food2 },
      { name: "juice", pic: food3 },
      { name: "liquor", pic: food4 },
      { name: "wines", pic: food5 },
      { name: "soft drinks", pic: food6 },
    ],
  },
  {
    id: 4,
    category: "Phones and Gadgets",
    data: [
      { name: "cellphones", pic: mobile1 },
      { name: "phone accessories", pic: mobile2 },
      { name: "iphones", pic: mobile3 },
      { name: "mobile phones", pic: mobile4 },
      { name: "smartphones", pic: mobile5 },
      { name: "tablets", pic: mobile6 },
    ],
  },
];

export const clearanceSales = [
  { id: 1, name: "banner", pic: sales1 },
  { id: 2, name: "groceries", pic: sales2 },
  { id: 3, name: "laptops", pic: sales3 },
  { id: 4, name: "phone accessories", pic: sales4 },
  { id: 5, name: "generator", pic: sales5 },
  { id: 6, name: "home appliances", pic: sales6 },
  { id: 7, name: "clearance sales", pic: sales7 },
  { id: 8, name: "men fashion", pic: sales8 },
  { id: 9, name: "mobile phones", pic: sales9 },
  { id: 10, name: "television", pic: sales10 },
  { id: 11, name: "shoes", pic: sales11 },
  { id: 12, name: "refridgerator", pic: sales12 },
];

// icons
import { LuApple } from "react-icons/lu";
import { CgHome } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaShirt } from "react-icons/fa6";
import { LuBaby } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";

export const asideData = [
  { icon: <LuApple />, iconText: " SuperMarket" },
  { icon: <CgHome />, iconText: "Health & beauty" },
  { icon: <PiCookingPot />, iconText: "Home & Office" },
  { icon: <IoIosPhonePortrait />, iconText: "Appliencies" },
  { icon: <CiMonitor />, iconText: "Phones & Tablet" },
  { icon: <PiTelevisionSimpleLight />, iconText: "Computing" },
  { icon: <FaShirt />, iconText: "Electronics" },
  { icon: <IoGameControllerOutline />, iconText: "Fashion" },
  { icon: <LuApple />, iconText: "Baby Products" },
  { icon: <IoGameControllerOutline />, iconText: "Gaming" },
  { icon: <GiWeightLiftingUp />, iconText: "Sporting Goods" },
  { icon: <CiCircleMore />, iconText: "Other Categories" },
];

export const asideTwoData = [
  {
    id: 1,
    icon: picAside1,
    iconText: "Call To Order",
    iconText2: "0700 600 0000",
  },
  { id: 2, icon: picAside3, iconText: "Sell on Jumia" },
  { id: 3, icon: picAside3, iconText: "Best Deals" },
];
