// Image imported because we can't use <img/> in next for add a image. 
import Image from "next/image";
type CategoryBoxProps = {
	imgSrc: string;
	borderSrc: string;
  };
export default function CategoryBox({ imgSrc, borderSrc }: CategoryBoxProps) {
	return (
		<div className="flex justify-center items-center">
			{/* this Image is the categorybox image */}
			<Image
				src={imgSrc}
				width={260}
				height={260}
				alt="CAtegorie Image"
			/>

			{/* this Image is the svg for categorybox border */}
			<Image
				src={borderSrc}
				width={240}
				height={240}
				alt="Ctegorie border"
				className="absolute"

			/>
		</div>
	);
}
