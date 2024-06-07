import React, { useEffect, useState } from "react";
import Header from "../../mainPart/header/header";
import ShowSneakersItem from "./showSneakerItem";
import SwiperForSneakers from "../../mainPart/main/swiper/swiperForSneakers";
import { sneakers } from "../../../data/allSneakers";
import { useParams, useNavigate } from "react-router-dom";
import styles from './showSneakers.module.css';

const ShowSneakers = () => {
  const navigate = useNavigate();
  const [curSneaker, setCurSneaker] = useState({});
  const idParams = useParams().id;

  useEffect(() => {
    const NewCurSneaker = sneakers.filter(sneaker => (sneaker.id === Number(idParams)));
    setCurSneaker(NewCurSneaker[0]);
  }, [curSneaker])

  function SneakerSet(curSneaker){
    setCurSneaker(curSneaker);
  }

  return (
    <div className="container">
      <Header/>
      {curSneaker ?
        <div>
          <ShowSneakersItem props={curSneaker}/>
          <h2>Other Sneakers</h2>
          <SwiperForSneakers sneakers={sneakers} curSneaker={SneakerSet}/>
        </div>     
        :
        <div className={styles.Error}>
          <h1>We`ve not this in market</h1>
          <button onClick={() => {navigate(-1)}}>Вернуться назад</button>
        </div>
      }
    </div>
  )
}

export default ShowSneakers;