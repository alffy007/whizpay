import * as React from "react";
import styles from "../style.js";
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import Shopcard from "../components/Shopcard.jsx";
import ShoppingList from "../components/Shoppinglist.jsx";

const Landingpage = () => {
  return (
    <div className="bg-primary font-poppins w-full  text-black overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div ><Navbar/> </div>
    </div>

 <div className=" bg-hero-pattern bg-cover">
     <div className={` ${styles.flexStart}`} >
      <div className={` ${styles.boxWidth} items-start flex`}><Shopcard/><ShoppingList/> </div>
    </div>
    <div className={` ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}><Stats/> </div>

    </div>
 </div>
    <Footer/> 
  </div>
  )
}

export default Landingpage