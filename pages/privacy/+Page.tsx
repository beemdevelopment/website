import "./App.css";
import Icon from "../../assets/icon.png";

export { Page };

function Page() {
  return (
    <>
      <div className="bg-white h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-300">
        <header>
          <nav className="fixed z-30 w-full bg-white/20 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="max-w-6xl m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <a className="relative z-10 w-10 mx-auto md:mx-0" href="/" aria-label="logo">
                    <img src={Icon} />
                  </a>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4"></div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="absolute top-0 pointer-events-none w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.22)_0,rgba(0,163,255,0.0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="">
          <div className="overflow-hidden xl:overflow-visible  dark:bg-gray-900 mx-auto max-w-6xl lg:pt-44 lg:pb-44 pt-24 pb-24 flex-col align-center justify-center py-8 px-5 xl:px-0">
            <div className="relative xl:container m-auto ml-6">
              <h1 className="text-2xl mb-2">Privacy policy</h1>
              <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                Aegis Authenticator does not collect any data from your device.
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Camera access is only used for scanning QR codes.</li>
              </ul>
              <p className="mt-4">
                If you believe this policy has been violated, please{" "}
                <a href="https://github.com/beemdevelopment/Aegis/issues/new">let us know</a>.
              </p>
            </div>
          </div>
        </div>
        <footer className="border-t border-gray-200 dark:border-gray-800 sticky top-[100vh]">
          <div className="overflow-hidden mx-auto max-w-6xl flex-col align-center justify-center px-5 xl:px-0">
            <div className="flex flex-col items-center pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
              <form className="flex w-full justify-center md:w-auto">
                <a href="/privacy" className="block hover:underline transition text-sm">
                  <span>Privacy Policy</span>
                </a>
              </form>
              <p className="mt-6 text-sm text-gray-500 md:mt-0">
                &copy; Copyright 2025 Beem Development, all rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
