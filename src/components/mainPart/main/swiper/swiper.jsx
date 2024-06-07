import styles from '../main.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css'

const NewSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      loop
      grabCursor={false}
      centeredSlides
      autoplay={{
        delay: 10000,
      }}
      className={styles.SwiperMain}
    >
      <SwiperSlide className={styles.SwiperSlide}>
        <h2><span>Stan Smith</span>, Forever!</h2>
        <button>
          Купить
        </button>
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>
      <h2><span>Stan Smith</span>, Forever!</h2>
        <button>
          Купить
        </button>
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>
      <h2><span>Stan Smith</span>, Forever!</h2>
        <button>
          Купить
        </button>
      </SwiperSlide>
    </Swiper>
  )
}

export default NewSwiper