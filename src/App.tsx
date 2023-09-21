import "./App.css";
import GooglePlayIcon from "./assets/svg/googleplay.svg";
import FDroidIcon from "./assets/svg/fdroid.svg";
import HeroScreenshot from "./assets/screenshots/hero.png";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <header>
          <input
            type="checkbox"
            name="hbr"
            id="hbr"
            className="hbr peer"
            hidden
            aria-hidden="true"
          />
          <nav className="fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="max-w-6xl m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <a className="relative z-10" href="#" aria-label="logo">
                    Aegis
                  </a>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Features</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Reviews</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>FAQ</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full space-y-2 border-primary/10 pl-4 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <a
                      href="#"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                        Download
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="overflow-hidden bg-white dark:bg-gray-900 mx-auto max-w-6xl lg:pt-44 pt-40 pb-56 flex-col align-center justify-center py-8 px-5 xl:px-0">
          <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <div className="lg:flex">
              <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left dark:text-white">
                  Aegis Authenticator
                </h1>
                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                  Aegis Authenticator is a free, secure and open source app for Android to manage
                  your 2-step verification tokens for your online services.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">
                  The most trusted 2 factor app for your phone.
                </span>
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                  <a
                    aria-label="Google Play Store"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                  >
                    <div className="flex justify-center space-x-4">
                      <img src={GooglePlayIcon} alt="Google Play" />
                      <span className="hidden font-medium md:block dark:text-white">
                        Google Play Store
                      </span>
                    </div>
                  </a>
                  <a
                    aria-label="add to chat"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                  >
                    <div className="flex justify-center space-x-4">
                      <img src={FDroidIcon} alt="F-Droid" />

                      <span className="hidden font-medium md:block dark:text-white">F-Droid</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-1/3">
                <div className="relative w-full">
                  <img
                    src={HeroScreenshot}
                    className="relative "
                    alt="wath illustration"
                    loading="lazy"
                    width="320"
                    height="280"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Features></Features>
      </div>
    </>
  );
}

export default App;
