import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import Card9 from "./Card9";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 1415;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 1415;
  };

  return (
    <div className="relative ">
      <div className="text-center py-4 text-black text-xl font-semibold">
        PRODUCT
      </div>
      <div className="absolute right-0 top-5 ">
        <button
          onClick={scrollLeft}
          className=" px-4 m-2 rounded-full border border-black"
        >
          <h1 className="text-black font-semibold text-2xl">←</h1>
        </button>
        <button
          onClick={scrollRight}
          className="  px-4 mr-6 rounded-full border border-black"
        >
          <h1 className="text-black font-semibold text-2xl">→</h1>
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
        <div>
          <Card6 />
        </div>
        <div>
          <Card7 />
        </div>
        <div>
          <Card8 />
        </div>
        <div>
          <Card9 />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
