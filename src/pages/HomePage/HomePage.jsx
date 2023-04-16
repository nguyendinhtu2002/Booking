import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/product/Frame 1.png";
import logo1 from "../../assets/img/product/Frame 2.png";
import logo2 from "../../assets/img/product/Frame 3.png";
import logo3 from "../../assets/img/product/Frame 4.png";
import logo4 from "../../assets/img/review/Frame 1.png";
import logo5 from "../../assets/img/review/Frame 2.png";
import logo6 from "../../assets/img/review/Frame 3.png";
import logo7 from "../../assets/img/contact/team_bnw.png";
function HomePage() {
  return (
    <>
      <div className='container max-w-screen-xl mx-auto relative'>
        <div class="grid grid-cols-1 md:grid-cols-3 mb-5 p-5">
          <div class="rounded-lg p-6 md:col-span-2 p-4">
            <h2 class="mb-2 text-2xl text-justify text-neutral-800">
              A cloud-based healthcare service with the mission of providing emotionally tilted
              edutainment
              materials.
            </h2>
            <div class="my-4">
              <a href="#"
                class="text-white bg-[#4441D5] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Let's
                go to the cloud nine</a>

              <a href="#"
                class="text-[#4441D5] outline-[#4441D5] hover:text-[#4441D5]/80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">
                Return to your space
              </a>
            </div>
          </div>
          <div class="md:col-span-1">

          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 p-5 gap-3">
          <div class="md:col-span-3">
            <h5 class="text-xl text-right uppercase">How do we do it?</h5>
            <p class="text-sm text-justify">we built a platform for you to gain more insights of your mental
              situations
              by guiding you through similar cases portrayed by recreational means.</p>
          </div>
          <div class="md:col-span-2">
          </div>
          <div class="md:col-span-6">
            <div class="grid grid-cols-2 gap-3">
              <div class="w-full mx-auto">
                <a href="#">
                  <img class="rounded-sm" src={logo} alt="" />
                </a>
                <div class="py-5 px-2">
                  <a href="#"
                    class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Session
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <p class="font-normal text-gray-700">Description.</p>

                </div>
              </div>


              <div class="w-full mx-auto">
                <a href="#">
                  <img class="rounded-sm" src={logo1} alt="" />
                </a>
                <div class="py-5 px-2">
                  <a href="#"
                    class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Session
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <p class="font-normal text-gray-700">Description.</p>

                </div>
              </div>

              <div class="w-full mx-auto">
                <a href="#">
                  <img class="rounded-sm" src={logo2} alt="" />
                </a>
                <div class="py-5 px-2">
                  <a href="#"
                    class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Session
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <p class="font-normal text-gray-700">Description.</p>

                </div>
              </div>


              <div class="w-full mx-auto">
                <a href="#">
                  <img class="rounded-sm" src={logo3} alt="" />
                </a>
                <div class="py-5 px-2">
                  <a href="#"
                    class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Session
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <p class="font-normal text-gray-700">Description.</p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div
        class="bg-[#4441D5] max-w-full mx-auto p-6 mt-5 text-white ">
        <h4 class="my-3 uppercase text-2xl ">What do people say about us</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 py-2">
          <div class="w-1/2 mx-auto">
            <a href="#">
              <img class="" src={logo4} alt="" />
            </a>
            <div class="py-5 px-2">
              <h5 class="text-xl">Name</h5>
              <p class="font-normal">Review</p>
            </div>
          </div>
          <div class="w-1/2 mx-auto">
            <a href="#">
              <img class="" src={logo5} alt="" />
            </a>
            <div class="py-5 px-2">
              <h5 class="text-xl">Name</h5>
              <p class="font-normal">Review</p>
            </div>
          </div>
          <div class="w-1/2 mx-auto">
            <a href="#">
              <img class="" src={logo6} alt="" />
            </a>
            <div class="py-5 px-2">
              <h5 class="text-xl">Name</h5>
              <p class="font-normal">Review</p>
            </div>
          </div>
        </div>
        <div class="w-full text-right my-4 p-3"><a href="#"
          class="uppercase font-bold text-2xl hover:text-gray-300">Read
          them all</a>
        </div>
      </div>
      <div class="bg-white max-w-full p-10 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center p-10 m-10">
          <div class="">
            <h3 class="text-justify uppercase text-2xl">Meet our team</h3>
            <p class="text-justify">We are a team of engineers, designers, psychiatrists, and researchers
              following the
              vision of building a healthy mindset.</p>
          </div>
          <div class="mx-auto">
            <img src={logo7} alt="Our team" />
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
