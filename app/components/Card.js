function Card() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[100px] h-[180px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/piolink_06.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">TiController</div>
          <div className="category text-xs font-light my-1">
            파이오링크 솔루션
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              클라우드 보안 스위치와 CCTV전용<p>스위치 전용 관리솔루션</p>쉬운
              운용과 뛰어난 가시성
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
