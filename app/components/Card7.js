function Card7() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[100px] h-[180px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_onenet.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">i-oneNet</div>
          <div className="category text-xs font-light my-1">
            휴네시온 SP파트너 선정
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              분리된 망 간 안전한 서비스 및
              <p>파일 연계 기능을 제공하는 솔루션</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card7;
