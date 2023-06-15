import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const navigation = [
  { name: "Resident", href: "#" },
  { name: "Owner / Investor", href: "#" },
  { name: "Company", href: "#" },
  { name: "Resource", href: "#" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white lg:container lg:px-24">
      <header className="absolute inset-x-0 top-0 z-50 lg:container lg:px-24">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/media/atlas.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <>
                <div className="dropdown">
                  <button className="dropbtn">
                    {item.name}
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href={item.href}>Link 1</a>
                    <a href={item.href}>Link 2</a>
                    <a href={item.href}>Link 3</a>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end font-semibold">
            <button className="bg-slate-200 rounded py-2 px-4 mr-4">
              Log in
            </button>
            <button className="bg-purple-red text-white py-2 px-8 rounded ">
              Get Started
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="/media/atlas.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 flex flex-col">
                <div className="space-y-2 py-6 flex flex-col">
                  {navigation.map((item) => (
                    <div className="dropdown">
                      <button className="dropbtn">
                        {item.name}
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                        <a href={item.href}>Link 1</a>
                        <a href={item.href}>Link 2</a>
                        <a href={item.href}>Link 3</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="py-6 flex flex-col font-semibold">
                  <button className="bg-slate-200 rounded p-2">Log in</button>
                  <button className="bg-purple-red text-white p-2 rounded mt-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 w-full justify-between">
        <div className="flex lg:flex-row-reverse flex-col py-8 sm:py-8 lg:py-8 w-full justify-between">
          <div className="lg:w-3/6 w-full">
            <img className="w-full" src="/media/image.png" alt="" />
          </div>
          <div className="lg:w-3/6 w-full flex flex-col justify-center items-start">
            <span className="text-emerald-700 font-semibold my-4">
              About Us
            </span>
            <h1 className="text-6xl font-bold my-4 font-['Zilla_Slab']">
              We Are The Digital Accounting and Finance Experts!
            </h1>
            <p className="my-4">
              Today's increasingly digital world requires increasingly digital
              solutions. With a digital accounting committed to Cte Ma me Crete
              tale ls) MOM how Deel tt Ge] professionals who create, represent,
              and transfer all of RIC em llama goodbye to the old formatting and
              filing methods such as papers, filing cabinets, and manual
              bookkeeping.
            </p>
            <button className="bg-emerald-700 text-white p-2 rounded my-4">
              Shcedule a Free Call
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full relative items-center">
        <div className="flex justify-center">
          <p className="font-bold text-3xl lg:text-5xl flex lg:flex-row flex-col justify-center items-center">
            <span className="italic font-heavy font-['Gibson_Bold_italic'] mx-2">
              WHATS HAPPENING
            </span>
            <span className="font-['Gibson_Semibold']"> IN YOUR WORLD</span>
          </p>
        </div>
        <div className="my-8 w-5/6 lg:w-full">
          <Swiper
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news1.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Korea Times, 19 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Teens say no to Samsung’s coal project
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news2.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Hangyoreh, 18 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Why Samsung C&T’s construction of coal power plant in Vietnam
                  is criticised
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news3.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Eco-Business, 12 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Samsung targeted by NGOs for proposal to build coal power
                  station in Vietnam
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news1.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Korea Times, 19 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Teens say no to Samsung’s coal project
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news2.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Hangyoreh, 18 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Why Samsung C&T’s construction of coal power plant in Vietnam
                  is criticised
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col relative overflow-hidden">
              <img src="/media/news3.png" alt="" className="w-full" />
              <div className="bg-dark text-white flex flex-col items-start p-3 relative">
                <p className="font-['Gibson_Light'] text-sm">
                  Eco-Business, 12 August 2020
                </p>
                <p className="font-['Gibson_Semibold'] text-2xl text-left uppercase my-2">
                  Samsung targeted by NGOs for proposal to build coal power
                  station in Vietnam
                </p>
              </div>
              <button className="bg-blue-700 absolute uppercase font-bold px-4 py-2 rounded text-sm bottom-4 left-3 text-white">
                find out more
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
