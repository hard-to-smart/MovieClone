import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Card from "./Card";

export default function Carousel({ slides, activeBtn}) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current <= 0) setCurrent(slides.length - 1);
        else setCurrent(current - 4);
    };

    let nextSlide = () => {
        if (current >= slides.length - 1) setCurrent(0);
        else setCurrent(current + 4);

    };


    return (
        
        <div className="flex flex-shrink-0  gap-2 w-full justify-center h-fit">
            <button onClick={previousSlide} className="text-3xl">
            <BsFillArrowLeftCircleFill />
        </button>
        <div className=" overflow-y-hidden relative w-full">
            <div
                className={`inline-flex transition ease-out duration-400 gap-2`}
                style={{
                    transform: `translateX(-${current * (100/slides.length)}%)`,
                }}
            >
                {slides.map((s) => {
                    return <Card key={s.id} element={s} type={activeBtn}/>;
                })}
            </div>
            
            
        </div>
        <button onClick={nextSlide} className="text-3xl">
                    <BsFillArrowRightCircleFill />
                </button>
        </div>
    );
}