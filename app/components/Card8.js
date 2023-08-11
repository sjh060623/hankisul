function Card8() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[100px] h-[180px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_ngs.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">NGS</div>
          <div className="category text-xs font-light my-1">
            휴네시온 SP파트너 선정
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              시스템 접근제어와 안전한 계정관리
              <p>및 패스워드 관리를 한번에 제공하는</p>3in 1 솔루션
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card8;
