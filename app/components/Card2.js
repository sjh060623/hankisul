function Card2() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[150px] h-[170px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_backbone.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">백본스위치</div>
          <div className="category text-xs font-light my-1">
            파이오링크 솔루션
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              TiFRONT 백본스위치<p>방화벽, 워크 그룹 스위치, 서버 등과</p>연결해
              대용량 트래픽을 처리
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card2;
