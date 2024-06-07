import React from "react";
import SneakerPost from "./sneackerPost";
import styles from '../main.module.css'

const SneakersItem = ({Cost, bookmarks, ...props}) => {
  if (!props.posts.length) return <h1 className={styles.Nothing}>There in nothing!</h1>;

  const changeSn = (data, index) => {
    Cost(data, index);
  }


  return (
    <div className={styles.allSneakers}>
      {props.posts.map((post, index) => {
        return <SneakerPost key={index} {...post} bookmarks={bookmarks} changeSn={changeSn}/>
      })}
    </div>
    )
} 
export default SneakersItem