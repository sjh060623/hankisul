function Card4() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[220px] h-[170px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/p_img05.jpg"
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
              효울적인 트래픽 관리를 위한 최상의 솔루션
              <p>QoS 컨트롤, 트래픽 차단,</p>트래픽 모니터링과 분석
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card4;
