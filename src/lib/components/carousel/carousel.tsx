import { key } from "@/lib/helpers/uniqueKey";
import useIsMobile from "@/lib/hooks/isMobile";
import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type CarouselProps = {
  images: string[];
};

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const renderMedia = (src: string, width:number, height:number) => {
    const extension = src.split(".").pop();
    if (extension === "mp4" || extension === "webm") {
      return (
        <video
          src={src}
          width={width}
          height={height}
          className={`w-full object-cover overflow-hidden`}
          autoPlay
          loop
          muted
        />
      );
    } else {
      return (
        <Image
          src={src}
          alt="Carousel Image"
          width={400}
          className={`w-full object-cover overflow-hidden`}
          priority={true}
          height={450}
        />
      );
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center">
      <div className="relative overflow-hidden w-full h-[300px] md:h-[450px] flex flex-row justify-center">
        {images.map((image, index) => (
          <div key={key()} className={`absolute mx-auto h-auto w-[85%] object-contain transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
            {renderMedia(image, 400, 450)}
          </div>
        ))}
        {activeIndex >= 1 && (
          <button
            className="block absolute left-0 p-4 top-[41%] text-black bg-white shadow-custom rounded-full"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + images.length) % images.length)
            }
          >
            <FaChevronLeft className="size-4" />
          </button>
        )}
        {activeIndex < images.length - 1 && (
          <button
            className="block absolute right-0 p-4 top-[41%] text-black bg-white shadow-custom rounded-full"
            onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
          >
            <FaChevronRight className="size-4" />
          </button>
        )}
      </div>
      <div className="mt-2 flex flex-row items-center justify-center gap-2">
        {images.map((image, index) => (
          <div
            key={key()}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#FF8B00]' : 'bg-gray-500'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    
    </div>
  );
};

export default Carousel;
