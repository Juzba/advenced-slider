import "./Slider.css";
import data from "../data";
import { useEffect, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

let buttonRight;

const Slider = () => {
	const [index, setIndex] = useState(0);
	const { image, title, tags, description } = data[index];
	// const { image1, title1, tags1, description1 } = data[() => index + 1 > data.length - 1 ? 0 : index + 1];

	buttonRight = () => setIndex(() => (index + 1 > data.length - 1 ? 0 : index + 1));

	const buttonLeft = () => setIndex(() => (index - 1 < 0 ? data.length - 1 : index - 1));

	useEffect(() => {
		const t1 = setTimeout(() => buttonRight(), 3000);
		return () => clearTimeout(t1);
	}, [index]);

	return (
		<div className='slider'>
			<div className='box'>
				<div>
					<img src={image} alt=''></img>
					<h2>{title}</h2>
					<p>{description}</p>
					<p>{tags}</p>
				</div>
				<div >
					{/* <img src={image1} alt=''></img>
					<h2>{title1}</h2>
					<p>{description1}</p>
					<p>{tags1}</p> */}
				</div>
			</div>
			<div className='slider-controls'>
				<button onClick={buttonRight}>{FaAnglesLeft()}</button>
				<button onClick={buttonLeft}>{FaAnglesRight()}</button>
			</div>
		</div>
	);
};

export default Slider;
