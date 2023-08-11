import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-white border-b-2 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src={require("public/logo.png")}
            classNameName="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className=" mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            제품
          </Link>
          <Link
            href="/"
            className="mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            나라장터
          </Link>
          <Link
            href="/"
            className="mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            서비스
          </Link>
          <Link
            href="/"
            className="mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            연구소
          </Link>
          <Link
            href="/"
            className="mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            회사소개
          </Link>
          <Link
            href="/"
            className="mr-16 text-xl text-gray-900 hover:text-indigo-600 font-semibold"
          >
            공지사항
          </Link>
        </nav>
      </div>
    </header>
  );
}
