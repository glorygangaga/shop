import React from "react";

const AddingSneakers = ({add, view}) => {
  const style = ['addingWindow'];
  if(add && view) style.push('view');
  

  return (
    <>
      {add ?
        <div className={style.join(' ')}>
          <img src={add.img} alt="" />
          <div>
            <p>{add.name}</p>
            <p>successfully added</p>
          </div>
        </div>
        :
        ''
      }
    </>
  )
}

export default AddingSneakers;