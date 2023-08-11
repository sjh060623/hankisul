function Card5() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[220px] h-[190px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/p_img06.jpg"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">
            트래픽관리 솔루션 QOS
          </div>
          <div className="category text-xs font-light my-1">
            엔에스텍 솔루션
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              효과적인 네트워크 운영!
              <p>경제적인 네트워크 관리계획 수립의 동반자!</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card5;
