import './Slider.css';
import data from '../data';
import { useEffect, useState } from 'react';
import { FaAnglesLeft } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';

const Slider = () => {
    const [index, setIndex] = useState(0);
    // const [count, setCount] = useState(0);
    const { image, title, tags, description } = data[index];

    console.log(index);

    const buttonRight = () => {

    };
    
    const buttonLeft = () => {};

    useEffect(() => {
        setTimeout(() => {
            setIndex(() => {
                const newIndex = index + 1;
                if (newIndex > data.length - 1) return 0;
                return newIndex;
            });
        }, 2000);
    }, [index]);

    return (
        <div className='slider'>
            <img src={image} alt=''></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{tags}</p>
            <div className='slider-controls'>
                <button onClick={buttonRight}>{FaAnglesLeft()}</button>
                <button onClick={buttonLeft}>{FaAnglesRight()}</button>
            </div>
        </div>
    );
};

export default Slider;
