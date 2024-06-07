import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from 'swiper/modules'
import 'swiper/css'
import SwiperForSneakersSlide from "./swiperForSneakerSlide";


const SwiperForSneakers = ({sneakers, curSneaker}) => {

  function Random(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      spaceBetween={50}

      // navigation
      loop
      grabCursor={false}
      centeredSlides
      autoplay={{
        delay: 10000,
      }}
    >
      <SwiperSlide>
        <SwiperForSneakersSlide sneaker={sneakers[Random(sneakers.length)]} curSneaker={curSneaker}/>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperForSneakersSlide sneaker={sneakers[Random(sneakers.length)]} curSneaker={curSneaker}/>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperForSneakersSlide sneaker={sneakers[Random(sneakers.length)]} curSneaker={curSneaker}/>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperForSneakersSlide sneaker={sneakers[Random(sneakers.length)]} curSneaker={curSneaker}/>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperForSneakersSlide sneaker={sneakers[Random(sneakers.length)]} curSneaker={curSneaker}/>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperForSneakers;
