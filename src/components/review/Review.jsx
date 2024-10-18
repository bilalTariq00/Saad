import React from 'react';
import './review.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
// import { Pagination } from 'swiper'; 
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <section className="review container section" id="reviews">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        modules={[Pagination]} // Include the Pagination module
        className="review__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true, // Enable clickable pagination
          dynamicBullets: true, // Optional: For better pagination UI
        }}
        breakpoints={{
          // Define responsive settings
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          992: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="review__card" key={id}>
            <p className="review__description">{description}</p>
            <img src={image} alt={title} className='review__img' />
            <h3 className="review__name">{title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;

