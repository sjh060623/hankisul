export default function Footer() {
  return (
    <footer class="text-gray-200 body-font bg-stone-800">
      <div class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="w-full px-4">
            <nav class="list-none mb-10">
              <li>
                <span class="text-gray-400 ">
                  대표이사 : 김 영 삼 | 사업자등록번호 : 410-86-42797
                </span>
              </li>
              <li>
                <span class="text-gray-400 ">
                  대전본사 : (35305) 대전광역시 서구 계룡로 678, 3층(용문동) |
                  T. 070-7770-5100(대표) | F. 042-367-0856
                </span>
              </li>
              <li>
                <span class="text-gray-400">
                  서울지사 : (14059) 경기도 안양시 동안구 흥안대로 427번길 16,
                  504호 (관양동, 평촌디지털엠파이어) | T. 070-7770-2570(대표) |
                  F. 070-7770-2566
                </span>
              </li>
              <li>
                <span class="text-gray-400 ">
                  광주지사 : (61946) 광주광역시 서구 시청로 92, 유탑 유블레스
                  트윈시티 102동 3201호
                </span>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-stone-800">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            COPYRIGHT ©2023 HANKISUL Co., Ltd.. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
