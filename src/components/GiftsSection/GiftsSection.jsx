import React from "react";
import GiftBox from "../GiftBox/GiftBox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function GiftsSection() {
	return (
		<div className="giftsections">
			<div className="giftsections-wrapper container">
				{/* Gift Boxes Slider */}
				<Swiper
					spaceBetween={300}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
					loop={true}
					slidesPerView={1}
					breakpoints={{
						// when window width is >= 992px
						992: {
							slidesPerView: 3,
							spaceBetween: 150,
						},
					}}
				>
					<SwiperSlide>
						<GiftBox />
					</SwiperSlide>
					<SwiperSlide>
						<GiftBox />
					</SwiperSlide>
					<SwiperSlide>
						<GiftBox />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
