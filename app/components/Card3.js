function Card3() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[220px] h-[170px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_cloud.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">
            클라우드 보안스위치
          </div>
          <div className="category text-xs font-light my-1">
            파이오링크 솔루션
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              TiFRONT 클라우드 보안스위치
              <p>모든 관리를 간소화, 내부망 보안까지 제공</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card3;
