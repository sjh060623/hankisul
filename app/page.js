"use client";

import Image from "next/image";
import Lottie from "react-lottie-player";
import lottieJson from "public/anim1.json";
import Carousel from "./components/Carousel";

import firstAnim from "public/clould.json";
import secAnim from "public/light.json";
import thrAnim from "public/server.json";
import fourAnim from "public/setting.json";
import fifAnim from "public/secu.json";
import sixAnim from "public/ante.json";
import sevAnim from "public/re.json";
import contAnim from "public/contect.json";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              고객의 편안한
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              시간과 일상을 한기술이
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              만들어 드리겠습니다
            </h1>
            <h3 className="mt-8 leading-relaxed">
              고객의 입장에서 최고보다는 최상의 솔루션을,
            </h3>
            <h3 className="leading-relaxed">
              최저가 보다는 최적화된 솔루션을 제공하고 고객과 한기술,
            </h3>
            <h3 className="mb-8 leading-relaxed">
              구성원의 동반성장을 고민하겠습니다.
            </h3>
            {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-20">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 550, height: 550 }}
            />
          </div>
        </div>
      </section>
      <div className="App bg-gray-100 w-[100vw] h-[100vh]">
        <Carousel />
        <section class="text-gray-600 body-font bg-white">
          <div class="container px-5 py-24 mx-auto ">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                최신/최적화된 솔루션과 기술을 안정적으로 제공하고
                일신우일신[日新又日新 ]하는 한기술이 되겠습니다.
              </h1>
              <h1 class="lg:w-2/3 mx-auto text-xl leading-relaxed text-base">
                고객의 편안한 시간과 일상을 한기술이 만들어 드리겠습니다.
              </h1>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-44 sm:w-1/2">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={firstAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">Network</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={secAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">Solution</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={thrAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">Storage</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={fourAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">Security</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={fifAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">Dio SEC</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={sixAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">IOT</p>
                </div>
              </div>
              <div class="p-4 md:w-44 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Lottie
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    loop
                    animationData={sevAnim}
                    play
                    style={{ width: 100, height: 100 }}
                  />

                  <p class="leading-relaxed">System</p>
                </div>
              </div>
              <section class="text-gray-600 body-font w-full">
                <div class="container px-5 py-24 mx-auto">
                  <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                      CONTACT US
                    </h1>
                    <div class="flex mt-6 justify-center">
                      <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                  </div>
                  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="32px"
                          viewBox="0 0 24 24"
                          width="32px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                          ADDRESS
                        </h2>
                        <p class="leading-relaxed text-base">
                          (35305)대전광역시 서구 계룡로 678, 3층(용문동)
                        </p>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="32px"
                          viewBox="0 0 24 24"
                          width="32px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
                          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                          TEL
                        </h2>
                        <p class="leading-relaxed text-base">
                          Tel. 070-7770-5100
                        </p>
                        <p class="leading-relaxed text-base">
                          FAX . 042-367-0856
                        </p>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="32px"
                          viewBox="0 0 24 24"
                          width="32px"
                          fill="#000000"
                        >
                          <g>
                            <rect fill="none" height="24" width="24" />
                          </g>
                          <g>
                            <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2" />
                          </g>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                          나라장터
                        </h2>
                        <span class="leading-relaxed text-base">
                          나라장터 쇼핑몰에서{" "}
                          <span className="text-blue-400">‘한기술’</span> 을
                          검색해 보세요
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}
