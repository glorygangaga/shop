import React from "react";
import NewSwiper from "./swiper/swiper";
import styles from './main.module.css'
import Sneakers from "./sneakers/sneakers";
import { sneakers } from "../../../data/allSneakers";

const Main = ({price, bookmarks}) => {

  return (
    <main className={styles.main}>
      <NewSwiper />
      <Sneakers price={price} bookmarks={bookmarks} sneakers={sneakers}/>
    </main>
  )
}

export default Main;