import React, { useState } from "react";
import Header from "../../mainPart/header/header";
import Sneakers from "../../mainPart/main/sneakers/sneakers";
import styles from '../route.module.css'
import { useNavigate } from "react-router-dom";

const Bought = () => {
  const navigate = useNavigate();
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('bought')) || [])
  const [price, SetPrice] = useState(JSON.parse(localStorage.getItem('price')) || 0);
  
  return (
    <div className="container">
      <Header exitPrice={price}/>
      {basket.length
        ?
        <div>
          <div className={styles.textBougth}>
            <button onClick={() => navigate(-1)}>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
                <path d="M19 22L14 17L19 12" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
            </button>
            <h2>Мои покупки</h2>
          </div>
          <Sneakers sneakers={basket} price={price}/>
        </div>
        :
        <div className={styles.NoBougth}>
          <img src="/src/imgs/smile.png" alt="" />
          <h1>У вас нет заказов</h1>
          <div className={styles.NoBougthText}>
            <p>Вы нищеброд?</p>
            <p>Оформите хотя бы один заказ.</p>
          </div>

          <button onClick={() => navigate(-1)}>Вернуться назад</button>
        </div>
      }
      
    </div>
  )
}

export default Bought