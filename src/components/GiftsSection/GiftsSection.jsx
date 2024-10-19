
"use client"
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
			<div className="container relative p-12 h-0">
				{/* Gift Boxes Slider */}
				<Swiper
					spaceBetween={300}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="absolute -top-[20rem] !p-6"
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
					<SwiperSlide className="lg:!w-[15rem] xl:!w-[20rem]">
						<GiftBox />
					</SwiperSlide >
					<SwiperSlide className="lg:!w-[15rem] xl:!w-[20rem]">
						<GiftBox />
					</SwiperSlide>
					<SwiperSlide  className="lg:!w-[15rem] xl:!w-[20rem]">
						<GiftBox />
					</SwiperSlide>
				</Swiper>
			</div>
	);
}