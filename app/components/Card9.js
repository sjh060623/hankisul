function Card9() {
  return (
    <>
      <div className="card bg-white w-[455px] h-[350px] m-2 rounded-lg shadow-lg text-black">
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <div className="top">
            <img
              className="w-[100px] h-[180px] object-cover  p-2"
              src="http://www.hankisul.com/img/main/main_campass.png"
              alt="img"
            />
          </div>
          <div className="title font-semibold text-xl my-1">CamPASS</div>
          <div className="category text-xs font-light my-1">
            휴네시온 SP파트너 선정
          </div>

          <div className="pricing flex items-center text-center">
            <span className="price ">
              다양한 CCTV및 VMS의 CCTV패스워드를
              <p>보다 편리하고 안전하게 관리할 수 있는</p>CCTV 패스워드 관리
              솔루션
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card9;
