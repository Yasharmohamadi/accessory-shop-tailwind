import React from "react";

export default function NavBar() {
	return (
		<div className="container z-10">
			{/* navbar wrapper */}
			<div className="flex flex-col items-center justify-between flex-wrap gap-6 p-4 lg:flex-row">
				{/* navbar user-basket-search */}
				<div className="flex items-center justify-center gap-5 bg-white px-2 py-1 overflow-hidden rounded-3xl border border-gray-200 order-2 lg:order-1">
					{/* navbar user */}
					<div className="flex items-center justify-center bg-primary p-2 rounded-full cursor-pointer">
						<svg className="w-4 h-4" viewBox="0 0 25 24" fill="none">
							<path
								d="M12.5 11.9999C13.6867 11.9999 14.8467 11.648 15.8334 10.9888C16.8201 10.3295 17.5892 9.3924 18.0433 8.29604C18.4974 7.19969 18.6162 5.99329 18.3847 4.8294C18.1532 3.66551 17.5818 2.59642 16.7426 1.7573C15.9035 0.918186 14.8344 0.346741 13.6705 0.11523C12.5067 -0.116281 11.3003 0.00253868 10.2039 0.456664C9.10754 0.91079 8.17047 1.67983 7.51118 2.66652C6.85189 3.65321 6.5 4.81325 6.5 5.99994C6.50159 7.59075 7.13424 9.11595 8.25911 10.2408C9.38399 11.3657 10.9092 11.9984 12.5 11.9999ZM12.5 1.99994C13.2911 1.99994 14.0645 2.23454 14.7223 2.67406C15.3801 3.11359 15.8928 3.7383 16.1955 4.46921C16.4983 5.20011 16.5775 6.00438 16.4231 6.7803C16.2688 7.55623 15.8878 8.26896 15.3284 8.82837C14.769 9.38778 14.0563 9.76874 13.2804 9.92308C12.5044 10.0774 11.7002 9.99821 10.9693 9.69546C10.2384 9.39271 9.61365 8.88002 9.17412 8.22222C8.7346 7.56443 8.5 6.79107 8.5 5.99994C8.5 4.93908 8.92143 3.92166 9.67157 3.17151C10.4217 2.42137 11.4391 1.99994 12.5 1.99994Z"
								fill="white"
							/>
							<path
								d="M12.5 14.0006C10.1139 14.0033 7.82622 14.9523 6.13896 16.6396C4.45171 18.3268 3.50265 20.6145 3.5 23.0006C3.5 23.2658 3.60536 23.5202 3.79289 23.7077C3.98043 23.8953 4.23478 24.0006 4.5 24.0006C4.76522 24.0006 5.01957 23.8953 5.20711 23.7077C5.39464 23.5202 5.5 23.2658 5.5 23.0006C5.5 21.1441 6.2375 19.3636 7.55025 18.0509C8.86301 16.7381 10.6435 16.0006 12.5 16.0006C14.3565 16.0006 16.137 16.7381 17.4497 18.0509C18.7625 19.3636 19.5 21.1441 19.5 23.0006C19.5 23.2658 19.6054 23.5202 19.7929 23.7077C19.9804 23.8953 20.2348 24.0006 20.5 24.0006C20.7652 24.0006 21.0196 23.8953 21.2071 23.7077C21.3946 23.5202 21.5 23.2658 21.5 23.0006C21.4974 20.6145 20.5483 18.3268 18.861 16.6396C17.1738 14.9523 14.8861 14.0033 12.5 14.0006Z"
								fill="white"
							/>
						</svg>
					</div>

					{/* navbar basket */}
					<div className="cursor-pointer">
						<svg className="w-6 h-6" viewBox="0 0 31 30" fill="none">
							<path
								d="M28.8912 5.09625C28.5396 4.6743 28.0995 4.33494 27.6019 4.10227C27.1044 3.8696 26.5617 3.74933 26.0125 3.75H5.8025L5.75 3.31125C5.64256 2.39927 5.20423 1.55842 4.51811 0.948097C3.83199 0.337779 2.94578 0.000427242 2.0275 0L1.75 0C1.41848 0 1.10054 0.131696 0.866117 0.366117C0.631696 0.600537 0.5 0.918479 0.5 1.25C0.5 1.58152 0.631696 1.89946 0.866117 2.13388C1.10054 2.3683 1.41848 2.5 1.75 2.5H2.0275C2.33367 2.50004 2.62917 2.61245 2.85796 2.81589C3.08676 3.01934 3.23293 3.29969 3.26875 3.60375L4.98875 18.2288C5.16732 19.7497 5.8981 21.1522 7.04239 22.17C8.18667 23.1878 9.66482 23.75 11.1962 23.75H24.25C24.5815 23.75 24.8995 23.6183 25.1339 23.3839C25.3683 23.1495 25.5 22.8315 25.5 22.5C25.5 22.1685 25.3683 21.8505 25.1339 21.6161C24.8995 21.3817 24.5815 21.25 24.25 21.25H11.1962C10.4226 21.2478 9.6685 21.0064 9.03742 20.5588C8.40634 20.1113 7.92914 19.4794 7.67125 18.75H22.5712C24.0366 18.7501 25.4554 18.2353 26.5798 17.2955C27.7041 16.3558 28.4625 15.0509 28.7225 13.6088L29.7038 8.16625C29.8017 7.62626 29.7797 7.07133 29.6393 6.5408C29.4989 6.01026 29.2435 5.5171 28.8912 5.09625ZM27.25 7.7225L26.2675 13.165C26.1114 14.0312 25.6556 14.815 24.9798 15.379C24.3041 15.943 23.4514 16.2513 22.5712 16.25H7.27375L6.0975 6.25H26.0125C26.1961 6.2489 26.3777 6.28828 26.5444 6.36532C26.7111 6.44236 26.8588 6.55518 26.9769 6.69576C27.095 6.83634 27.1808 7.00121 27.228 7.17867C27.2752 7.35613 27.2827 7.54181 27.25 7.7225Z"
								fill="#C83A81"
							/>
							<path
								d="M9.25018 30.0008C10.6309 30.0008 11.7502 28.8815 11.7502 27.5008C11.7502 26.1201 10.6309 25.0008 9.25018 25.0008C7.86947 25.0008 6.75018 26.1201 6.75018 27.5008C6.75018 28.8815 7.86947 30.0008 9.25018 30.0008Z"
								fill="#C83A81"
							/>
							<path
								d="M21.75 30.0008C23.1307 30.0008 24.25 28.8815 24.25 27.5008C24.25 26.1201 23.1307 25.0008 21.75 25.0008C20.3693 25.0008 19.25 26.1201 19.25 27.5008C19.25 28.8815 20.3693 30.0008 21.75 30.0008Z"
								fill="#C83A81"
							/>
						</svg>
					</div>

					{/* divide line */}
					<div className="w-px h-8 bg-gray-200"></div>

					{/* navbar search box*/}
					<div className="flex">
						{/* navbar search icon*/}
						<div className="cursor-pointer">
							<svg className="w-6 h-6" viewBox="0 0 31 30" fill="none">
								<path
									d="M30.1335 27.8671L22.6722 20.4059C24.7055 17.9191 25.7052 14.746 25.4645 11.5428C25.2239 8.33968 23.7612 5.35155 21.3792 3.19654C18.9972 1.04153 15.878 -0.115498 12.6668 -0.0352078C9.45559 0.045082 6.39811 1.35654 4.12674 3.6279C1.85538 5.89927 0.543922 8.95675 0.463633 12.1679C0.383343 15.3791 1.54037 18.4983 3.69538 20.8804C5.85039 23.2624 8.83852 24.725 12.0417 24.9657C15.2448 25.2064 18.418 24.2067 20.9047 22.1734L28.366 29.6346C28.6017 29.8623 28.9175 29.9883 29.2452 29.9855C29.573 29.9826 29.8865 29.8512 30.1183 29.6194C30.35 29.3877 30.4815 29.0741 30.4843 28.7464C30.4872 28.4186 30.3612 28.1029 30.1335 27.8671ZM12.9997 22.5009C11.0219 22.5009 9.08852 21.9144 7.44403 20.8156C5.79953 19.7168 4.51781 18.155 3.76093 16.3277C3.00406 14.5005 2.80602 12.4898 3.19187 10.55C3.57773 8.61017 4.53013 6.82834 5.92866 5.42982C7.32719 4.03129 9.10901 3.07889 11.0488 2.69303C12.9886 2.30718 14.9993 2.50522 16.8266 3.26209C18.6538 4.01897 20.2156 5.30069 21.3144 6.94518C22.4132 8.58968 22.9997 10.5231 22.9997 12.5009C22.9968 15.1521 21.9422 17.6939 20.0675 19.5687C18.1928 21.4434 15.651 22.4979 12.9997 22.5009Z"
									fill="#AF2A69"
								/>
							</svg>
						</div>

						{/* navbar search input*/}
						<input
							className="placeholder-gray-400 outline-none mr-4"
							placeholder="جستجو کنید"
						/>
					</div>
				</div>

				{/* navbar logo */}
				<div className="flex items-center justify-center gap-4 cursor-pointer order-1 lg:order-2">
					<svg className="h-12 w-12" viewBox="0 0 41 40" fill="none">
						<path
							d="M10.3996 38.925C8.02812 38.925 6.09959 36.9965 6.09959 34.625C6.09959 32.2535 8.02812 30.325 10.3996 30.325C12.7711 30.325 14.6996 32.2535 14.6996 34.625C14.6996 36.9965 12.7711 38.925 10.3996 38.925Z"
							fill="#E6D9C2"
						/>
						<path
							d="M31.8995 38.925C29.528 38.925 27.5995 36.9965 27.5995 34.625C27.5995 32.2535 29.528 30.325 31.8995 30.325C34.271 30.325 36.1995 32.2535 36.1995 34.625C36.1995 36.9965 34.271 38.925 31.8995 38.925Z"
							fill="#E6D9C2"
						/>
						<path
							d="M22.0977 -1.92493H27.7264L24.9121 2.86814L22.0977 -1.92493Z"
							fill="#FEEBD6"
						/>
						<path
							d="M13.1222 26.025L10.6647 8.82507H16.507L16.3723 10.0205C16.3307 10.386 16.3121 10.6892 16.3121 10.9751C16.3121 15.7172 20.1699 19.5751 24.912 19.5751C29.6542 19.5751 33.512 15.7172 33.512 10.9751C33.512 10.6891 33.4934 10.386 33.4518 10.0205L33.3171 8.82507H39.775L34.8615 26.025H13.1222Z"
							fill="#F6D4E9"
						/>
						<path
							d="M24.912 19.5751C20.1699 19.5751 16.3121 15.7172 16.3121 10.9751C16.3121 10.5966 16.3429 10.2068 16.4081 9.74739L16.5407 8.82507H33.2841L33.4167 9.74739C33.482 10.2068 33.5127 10.5966 33.5127 10.9751C33.512 15.7172 29.6542 19.5751 24.912 19.5751Z"
							fill="#F6D4E9"
						/>
						<path
							d="M10.3996 35.7C10.9933 35.7 11.4746 35.2188 11.4746 34.625C11.4746 34.0313 10.9933 33.55 10.3996 33.55C9.80585 33.55 9.32455 34.0313 9.32455 34.625C9.32455 35.2188 9.80585 35.7 10.3996 35.7Z"
							fill="#C20E43"
						/>
						<path
							d="M31.8996 35.7C32.4933 35.7 32.9746 35.2188 32.9746 34.625C32.9746 34.0313 32.4933 33.55 31.8996 33.55C31.3058 33.55 30.8246 34.0313 30.8246 34.625C30.8246 35.2188 31.3058 35.7 31.8996 35.7Z"
							fill="#C20E43"
						/>
						<path
							d="M39.4247 33.55H37.1664C36.6683 31.0969 34.5004 29.25 31.8997 29.25C29.2989 29.25 27.131 31.0969 26.6329 33.55H15.6636C15.1827 31.1972 13.1588 29.4156 10.6935 29.2794L7.16321 5.44244C7.12953 5.21383 7.0227 5.00387 6.86002 4.83968L-0.664965 -2.6853C-1.08489 -3.10522 -1.76499 -3.10522 -2.185 -2.6853C-2.605 -2.26538 -2.605 -1.58519 -2.185 -1.16527L5.08913 6.10743L8.56784 29.5911C6.50527 30.3428 5.02463 32.303 5.02463 34.6249C5.02463 37.5934 7.4312 39.9999 10.3996 39.9999C12.9997 39.9999 15.1683 38.1531 15.6664 35.6999H26.6328C27.1309 38.1531 29.2988 39.9999 31.8995 39.9999C34.5002 39.9999 36.6682 38.1531 37.1662 35.6999H39.4245C40.0186 35.6999 40.4995 35.2191 40.4995 34.6249C40.4997 34.0309 40.0188 33.55 39.4247 33.55ZM10.3997 37.85C8.62168 37.85 7.17471 36.4031 7.17471 34.625C7.17471 32.847 8.62168 31.4 10.3997 31.4C12.1777 31.4 13.6247 32.847 13.6247 34.625C13.6247 36.4031 12.1777 37.85 10.3997 37.85ZM31.8997 37.85C30.1216 37.85 28.6747 36.4031 28.6747 34.625C28.6747 32.847 30.1216 31.4 31.8997 31.4C33.6777 31.4 35.1247 32.847 35.1247 34.625C35.1247 36.4031 33.6777 37.85 31.8997 37.85Z"
							fill="#C20E43"
						/>
						<path
							d="M15.7932 7.75006H11.9046C11.2818 7.75006 10.6891 8.02024 10.2806 8.49106C9.87206 8.96187 9.68788 9.5868 9.77674 10.2039L11.9267 25.2539C12.078 26.3131 12.9845 27.1 14.0545 27.1H34.0494C35.0098 27.1 35.8533 26.4636 36.1171 25.5405L40.417 10.4906C40.6026 9.84194 40.4722 9.14395 40.0659 8.6057C39.6596 8.06677 39.0239 7.74998 38.3495 7.74998H34.0309C32.943 4.70203 30.3587 2.36206 27.1695 1.5931L27.9105 0.111028C28.2438 -0.555471 28.2079 -1.34669 27.8166 -1.98094C27.4239 -2.61443 26.7323 -3 25.987 -3H23.837C23.0916 -3 22.4001 -2.61443 22.008 -1.98018C21.616 -1.34593 21.5802 -0.554715 21.9141 0.111784L22.6551 1.59385C19.4653 2.36223 16.881 4.70211 15.7932 7.75006ZM34.5203 9.90006H38.3495L34.0495 24.95H14.0546L11.9046 9.90006H15.3037C15.2644 10.2534 15.2371 10.611 15.2371 10.9751C15.2371 16.3099 19.5772 20.65 24.912 20.65C30.2469 20.65 34.587 16.3099 34.587 10.9751C34.587 10.611 34.5597 10.2534 34.5203 9.90006ZM32.437 10.9751C32.437 15.131 29.068 18.5 24.912 18.5C20.7561 18.5 17.3871 15.131 17.3871 10.9751C17.3871 10.6088 17.4222 10.252 17.4723 9.90006H32.351C32.4019 10.252 32.437 10.6089 32.437 10.9751ZM25.987 -0.84992L24.912 1.30008L23.837 -0.84992H25.987ZM24.912 3.45007C27.912 3.45007 30.4941 5.21021 31.7032 7.75006H18.1209C19.3292 5.21021 21.912 3.45007 24.912 3.45007Z"
							fill="#C20E43"
						/>
					</svg>
					<h1 className="font-iranYekanBlack text-2xl">اکسسوری شاپ</h1>
				</div>

				{/* navbar list */}
				<div className="order-3">
					<ul className="flex gap-8 list-none">
						<li className="cursor-pointer flex items-center justify-center gap-2">
							<a href="#">محصولات</a>
							<svg
								width="15"
								height="9"
								viewBox="0 0 15 9"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.2099 1.20998C14.1169 1.11625 14.0063 1.04186 13.8845 0.991091C13.7626 0.940323 13.6319 0.914185 13.4999 0.914185C13.3679 0.914185 13.2372 0.940323 13.1153 0.991091C12.9934 1.04186 12.8828 1.11625 12.7899 1.20998L8.20988 5.78997C8.11691 5.8837 8.00631 5.9581 7.88445 6.00886C7.7626 6.05963 7.63189 6.08577 7.49988 6.08577C7.36787 6.08577 7.23716 6.05963 7.1153 6.00886C6.99344 5.9581 6.88284 5.8837 6.78988 5.78997L2.20988 1.20998C2.11691 1.11625 2.00631 1.04186 1.88445 0.991091C1.76259 0.940323 1.63189 0.914185 1.49988 0.914185C1.36787 0.914185 1.23716 0.940323 1.1153 0.991091C0.993441 1.04186 0.88284 1.11625 0.789877 1.20998C0.603626 1.39734 0.499084 1.6508 0.499084 1.91498C0.499084 2.17917 0.603626 2.43262 0.789877 2.61998L5.37988 7.20997C5.94238 7.77177 6.70487 8.08733 7.49988 8.08733C8.29488 8.08733 9.05738 7.77177 9.61988 7.20997L14.2099 2.61998C14.3961 2.43262 14.5007 2.17917 14.5007 1.91498C14.5007 1.6508 14.3961 1.39734 14.2099 1.20998Z"
									fill="black"
									fillOpacity="0.7"
								/>
							</svg>
						</li>
						<li className="cursor-pointer">
							<a href="#">درباره ما</a>
						</li>
						<li className="cursor-pointer">
							<a href="#">گردونه شانس</a>
						</li>
						<li className="cursor-pointer">
							<a href="#">کادو بده</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}