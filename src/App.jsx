import React, { useEffect, useState } from "react"
import Header from "./components/mainPart/header/header"
import Main from "./components/mainPart/main/main"
import Window from "./components/Routes/window/window";
import AddingSneakers from "./components/Routes/addingSneakers/addingSneakers";

function App() {
  const [openMoadal, setOpenModal] = useState(false);
  const [addWindow, setAddWindow] = useState(false);
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket'))  || []);
  const [price, SetPrice] = useState(JSON.parse(localStorage.getItem('price')) || 0);

  useEffect(() => {
    const jsonBasket = JSON.stringify(basket);
    (jsonBasket.length) ? localStorage.setItem('basket', jsonBasket) : '';

    const price = basket.reduce((cnt, sneaker) => {
      return cnt += sneaker.price
    }, 0);
    localStorage.setItem('price', price);
  }, [basket])

  useEffect(() => {
    setTimeout(() => {
      setAddWindow(false);
    }, 3000);
  }, [addWindow])

  useEffect(() => {
    const localBookmarks = JSON.stringify(bookmarks);
    (localBookmarks.length) ?  localStorage.setItem('bookmarks', localBookmarks) : '';
  }, [bookmarks])

  const addingInBookmarks = (curr) => {
    setBookmarks([...bookmarks, curr]);
  }

  const changePrice = (prices) => {
    if(!prices.price) return;
    SetPrice(price + prices.price);
    setBasket([...basket, {...prices, index: basket.length + 1}]);
    setAddWindow(true);
  }

  function removeSneaker(delCurr, currIndex){
    const newBasket = basket.filter((curr, index) => {
      return ((index !== currIndex) && (delCurr.id !== curr.id));
    });
    const newCost = newBasket.reduce((a, b) => a + b.price, 0);
    setBasket(newBasket);
    SetPrice(newCost);
    localStorage.setItem('basket', JSON.stringify(newBasket))
  }


  return (
    <div className="precontainer">

      <div className="container">
        <Header exitPrice={price} setOpenModal={() => setOpenModal(true)} />
        <Main price={changePrice} bookmarks={addingInBookmarks}/>
        {openMoadal ? 
          <Window
            remove={removeSneaker} 
            list={basket}
            SetPrice={SetPrice}
            setList={setBasket} 
            exitPrice={price} 
            openMoadal={openMoadal} 
            setOpenModal={setOpenModal}
          />
          : 
          ''
        }
      </div>
      <AddingSneakers add={basket[basket.length - 1]} view={addWindow}/>
    </div>  
  )
}

export default App;
