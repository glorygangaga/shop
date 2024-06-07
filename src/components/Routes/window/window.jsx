import React, { useEffect, useState } from "react";
import WindowPost from "./windowPost";
import styles from './window.module.css'

const Window = (props) => {
  const style = ['mainMenu'];
  const [buyBasket, setBuyBasket] = useState(JSON.parse(localStorage.getItem('bought')) || []);
  const [bougthBasket, setBougthBasket] = useState(false);

  if(props.openMoadal.modal){
    style.push('active');
  }

  useEffect(() => {
    localStorage.setItem('bought', JSON.stringify(buyBasket));
  }, [buyBasket])

  function addingBougth(){
    setBuyBasket([...buyBasket, ...props.list]);
    setBougthBasket(true);
    props.setList([]);
    props.SetPrice(0);
  }

  return (
    <div className={style.join(' ')} onClick={() => {props.setOpenModal(false)}}>
      <div className={styles.menu} onClick={e => e.stopPropagation()}>
        <h2>Корзина</h2>
        {(props.list.length) 
          ? 
            <div className={styles.List}>
              <ul className={styles.ulOfSneakers}>
                <WindowPost list={props.list} remove={props.remove}/>
              </ul>
              <div className={styles.exitOrder}>
                <div className={styles.exitOrder1}>
                  <h4>Итого: </h4>
                  <p>{props.exitPrice} руб.</p>
                </div>
                <div className={styles.exitOrder2}>
                  <h4>Налог 5%: </h4>
                  <p>{Math.round(props.exitPrice * 0.05)} руб.</p>
                </div>
                <div>
                  <button className={styles.listBtn} onClick={addingBougth}>Оформить заказ</button>
                </div>
              </div>
            </div>
            
          : (bougthBasket) ?
              <div className={styles.addedBougth}>
                <img src='/src/imgs/added.png' alt="" />
                <h5>Заказ оформлен!</h5>
                <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
                <button onClick={() => {props.setOpenModal(false)}}>Вернуться назад</button>
              </div>
            :
            <div className={styles.notList} >
              <img src="/src/imgs/box.png" alt="" />
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={() => {props.setOpenModal(false)}}>Вернуться назад</button>
            </div>
            
          }
      </div>
    </div>
    
  )
}

export default Window;