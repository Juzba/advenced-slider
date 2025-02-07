import './Slider.css';
import data from '../data';
import { useEffect, useState } from 'react';
import { FaAnglesLeft } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';

function Slider() {
    const [index, setIndex] = useState(0);

    const slideLeft = () => setIndex(() => (index - 1 < 0 ? data.length - 1 : index - 1));

    const slideRight = () => setIndex(() => (index + 1 < data.length ? index + 1 : 0));

    useEffect(() => {
       const t1 = setTimeout(() => slideRight(),5000);
       return ()=> clearTimeout(t1)
    });

    return (
        <section className='slider'>
            {data.map((oneMovie, indexMovie) => {
                const { id, image, title, age, description, tags } = oneMovie;

                let position = 'nextPosition';

                if (indexMovie === index) position = 'position';

                if (indexMovie === index - 1 || (index === 0 && indexMovie === data.length - 1)) position = 'lastPosition';

                return (
                    <div className='card' id={position} key={id}>
                        <img src={image} alt=''></img>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>{tags}</p>
                        <p>{age}</p>
                    </div>
                );
            })}
            <div className='buttons'>
                <button onClick={() => slideLeft()}>{FaAnglesLeft()}</button>
                <button onClick={() => slideRight()}>{FaAnglesRight()}</button>
            </div>
        </section>
    );
}

export default Slider;
