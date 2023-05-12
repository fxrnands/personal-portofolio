import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function NavigationBar() {
  return (
    <header className="bg-gray-900 fixed top-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="/fernands.png"
              width={5000}
              height={1500}
              className="h-8 w-auto"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex-1 flex justify-end lg:flex-1 lg:gap-x-12">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <FiDownload className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            <a href="https://drive.google.com/file/d/1V3LboTXEU1Y1LqHH8xItUPfVR6KlyOsA/view?usp=sharing">
              {`Download CV`}
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
