import React, { useState, useEffect } from "react";
import Header from "../../mainPart/header/header";
import styles from '../route.module.css'
import { useNavigate } from "react-router-dom";
import Sneakers from "../../mainPart/main/sneakers/sneakers";

const Bookmarks = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);

  useEffect(() => {
    const localBookmarks = JSON.stringify(bookmarks);
    (localBookmarks.length) ?  localStorage.setItem('bookmarks', localBookmarks) : '';
  }, [bookmarks])


  const addingInBookmarks = (curr) => {
    setBookmarks([...bookmarks, curr]);
  }

  return (
    <div className={styles.Bookmarks}>
      <div className="container">
        <Header/>
        {bookmarks.length ?
          <Sneakers Cost={pass} bookmarks={addingInBookmarks} sneakers={bookmarks}/>
          :
          <div className={styles.noBookMarks}>
            <img src="/src/imgs/smileBad.png" alt="" />
            <h1>Закладок нет :(</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <button onClick={() => {navigate(-1)}}>Вернуться назад</button>
          </div>
        }
        
      </div>
    </div>
    
  )
}

export default Bookmarks