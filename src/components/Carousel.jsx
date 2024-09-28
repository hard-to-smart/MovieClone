import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Card from "./Card";

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
        console.log(current)
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
        console.log(current)

    };

    return (
        
        <div className="flex flex-shrink-0 gap-6 w-full justify-center h-fit">
            <button onClick={previousSlide} className="text-3xl">
            <BsFillArrowLeftCircleFill />
        </button>
        <div className="overflow-x-scroll overflow-y-hidden relative w-[80%] ">
            <div
                className={`inline-flex transition ease-out duration-400 gap-4`}
                style={{
                    transform: `translateX(-${current * 30}%)`,
                }}
            >
                {slides.map((s) => {
                    return <Card key={s.id} element={s} onClick={console.log(s.title)}/>;
                })}
            </div>
            
            
        </div>
        <button onClick={nextSlide} className="text-3xl">
                    <BsFillArrowRightCircleFill />
                </button>
        </div>
    );
}
