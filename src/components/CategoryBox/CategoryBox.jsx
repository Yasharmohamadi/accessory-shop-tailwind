// Image imported because we can't use <img/> in next for add a image. 
import Image from "next/image";

export default function CategoryBox({ imgSrc, borderSrc }) {
	return (
		<div className="categorie-box col-12 col-md-3 col-lg-2">
			{/* this Image is the categorybox image */}
			<Image
				src={imgSrc}
				width={240}
				height={240}
				alt="CAtegorie Image"
				className="categorie-box-img"
			/>

			{/* this Image is the svg for categorybox border */}
			<Image
				src={borderSrc}
				width={240}
				height={240}
				alt="Ctegorie border"
				className="categorie-box-svg"
			/>
		</div>
	);
}
