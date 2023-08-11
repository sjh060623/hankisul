function Card6() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[220px] h-[170px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_disk.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">
            HGS-1000 Series
          </div>
          <div className="category text-xs font-light my-1">
            한기술 디스크어레이
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              기존 네트워크를 통한 스토리지를 통합
              <p>소요 비용 절감 및 간소화, 계층형</p>
              <p>스토리지의 효율성, 가상 서버 환경에서</p>요구되는 유연성 동시
              제공
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card6;
