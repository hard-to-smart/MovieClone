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
        else setCurrent(current - 0.5);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 0.5);
    };

    return (
        <div className=" overflow-hidden overscroll-x-contain relative ">
            <div
                className={`inline-flex transition ease-out duration-400 gap-4`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s) => {
                    return <Card key={s.id} element={s} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
        </div>
    );
}
