import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../../assets/img/product_media/Frame1.png";
import "../../pages/Product/css/MediaPage.css";
import logo from "../../assets/img/product/Frame 1.png";
import logo1 from "../../assets/img/product/Frame 2.png";
import logo2 from "../../assets/img/product/Frame 3.png";
import logo3 from "../../assets/img/product/Frame 4.png";

const MediaPage = () => {
  return (
    <>
      <div className="content max-w-screen-xl mx-auto border-y border-solid border-[#1E1D1D]  ">
        <div className="content-left">
          <img src={Frame1} alt="media" className="img_media" />
        </div>
        <div className="divine"></div>
        <div className="content-right">
          <h3 className="content-right-title">OVERVIEW</h3>
          <span className="content-right-para">
            see yourselves in action - films, movies, documentaries, etc. with
            insightful relation
          </span>
        </div>
      </div>

      <div className="main">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div class="md:col-span-3">
            <div class="text-xl text-right uppercase">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-[#4441D5] border border-[#4441D5] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <div class="text-sm text-justify">
              <div className="list">
                <Link className="list-item">PTSD</Link>
                <Link className="list-item">anxiety disorders</Link>
                <Link className="list-item">bipolar disorders</Link>
                <Link className="list-item">schizophrenia</Link>
              </div>
            </div>
          </div>
          <div class="md:col-span-9">
            <div class="grid grid-cols-2">
              <div className="release">
                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo} alt="" />
                  </Link>
                  <div class="py-5 px-2 flex justify-items-stretch">
                    <div>
                      <div>
                          <span className="">DR.NAME</span>
                      </div>
                    </div>
                    <div>
                      <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Session
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo1} alt="" />
                  </Link>
                  <div class="py-5 px-2">
                    <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Session
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <p class="font-normal text-gray-700">Mental Health 2</p>
                  </div>
                </div>
                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo1} alt="" />
                  </Link>
                  <div class="py-5 px-2">
                    <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Session
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <p class="font-normal text-gray-700">Mental Health 2</p>
                  </div>
                </div>
              </div>

              <div className="recently_watch">
                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo2} alt="" />
                  </Link>
                  <div class="py-5 px-2">
                    <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Session
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <p class="font-normal text-gray-700">Description.</p>
                  </div>
                </div>

                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo3} alt="" />
                  </Link>
                  <div class="py-5 px-2">
                    <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Session
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <p class="font-normal text-gray-700">Description.</p>
                  </div>
                </div>

                <div class="w-1/2 mx-auto">
                  <Link>
                    <img class="rounded-sm" src={logo3} alt="" />
                  </Link>
                  <div class="py-5 px-2">
                    <Link class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4441D5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Session
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <p class="font-normal text-gray-700">Description.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
