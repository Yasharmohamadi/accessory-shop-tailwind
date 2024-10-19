import React from "react";
import { Squircle } from "@squircle-js/react";
export default function GiftBox() {
	return (
		<div className="relative flex items-center justify-center ">
			{/* giftbox box */}
			<Squircle
				cornerRadius={60}
				cornerSmoothing={1}
				className="relative flex items-center justify-center flex-col gap-8 py-16 px-14 w-full h-full bg-white text-center"
			>
				{/* giftbox title */}
				<span className="text-2xl font-iranYekanBlack">هدیه‌ای طراحی شده توسط شما !</span>
				{/* giftbox caption */}
				<span className="font-iranYekanBold">
					از انتخاب پاکت کادو و گل‌ها تا نوشتن متن روی کارت
				</span>
			</Squircle>
			<svg
				className="absolute -left-6 top-0 bottom-0 my-auto   cursor-pointer w-[3rem] h-[3rem] rounded-2xl border border-dashed border-primary z-10 backdrop-blur-lg"

				viewBox="0 0 26 26"
				fill="none"
			>
				<path
					d="M6.58667 12.5883C6.63823 12.4554 6.71554 12.3339 6.81417 12.2308L12.2308 6.81417C12.3318 6.71317 12.4518 6.63304 12.5837 6.57838C12.7157 6.52371 12.8572 6.49557 13 6.49557C13.2885 6.49557 13.5652 6.61018 13.7692 6.81417C13.8702 6.91518 13.9503 7.0351 14.005 7.16707C14.0596 7.29904 14.0878 7.44049 14.0878 7.58334C14.0878 7.87183 13.9732 8.14851 13.7692 8.35251L10.1942 11.9167H18.4167C18.704 11.9167 18.9795 12.0308 19.1827 12.234C19.3859 12.4371 19.5 12.7127 19.5 13C19.5 13.2873 19.3859 13.5629 19.1827 13.766C18.9795 13.9692 18.704 14.0833 18.4167 14.0833H10.1942L13.7692 17.6475C13.8707 17.7482 13.9513 17.868 14.0063 18C14.0613 18.1321 14.0896 18.2737 14.0896 18.4167C14.0896 18.5597 14.0613 18.7013 14.0063 18.8333C13.9513 18.9653 13.8707 19.0851 13.7692 19.1858C13.6685 19.2874 13.5486 19.368 13.4166 19.423C13.2846 19.478 13.143 19.5063 13 19.5063C12.857 19.5063 12.7154 19.478 12.5834 19.423C12.4514 19.368 12.3315 19.2874 12.2308 19.1858L6.81417 13.7692C6.71554 13.6661 6.63823 13.5447 6.58667 13.4117C6.47831 13.1479 6.47831 12.8521 6.58667 12.5883Z"
					fill="#C83A81"
				/>
			</svg>
			{/* <svg
				className="giftbox-shadow"
				width="358"
				height="33"
				viewBox="0 0 358 33"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_f_215_145)">
					<ellipse
						cx="179"
						cy="16.5"
						rx="169"
						ry="6.5"
						fill="#DDC3CE"
						fillOpacity="0.46"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_215_145"
						x="0"
						y="0"
						width="358"
						height="33"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="5"
							result="effect1_foregroundBlur_215_145"
						/>
					</filter>
				</defs>
			</svg> */}
		</div>
	);
}
