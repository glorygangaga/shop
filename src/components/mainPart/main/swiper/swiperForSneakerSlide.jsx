import React from "react";
import {NavLink} from 'react-router-dom'
import styles from './swiperForSneakers.module.css'

const SwiperForSneakersSlide = ({sneaker, curSneaker}) => {
  const LinkTo = `/sneakers/${sneaker.id}`
  return(
    <div className={styles.NavLinkSwiper} >
      <img src={sneaker.img} alt="" />
      <div>
        <p className={styles.NameLinkTo}>{sneaker.name}</p>
        <div className={styles.NavLinkMain}>
          <div className={styles.NavLinkText}>
            <h4>цена</h4>
            <p>{sneaker.price} руб.</p>
          </div>
          <NavLink className={styles.NavLink} to={LinkTo} onClick={() => {curSneaker(sneaker)}}>
            <p>Go to</p>
          </NavLink>
        </div>
      </div>    
    </div>
  )
}

export default SwiperForSneakersSlide