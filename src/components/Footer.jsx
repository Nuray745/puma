import React, { useState } from "react";
import { pumaApp, pumaTrac } from "../assets";
import { useMatchMedia } from "../hooks/use-matchwidth";

function Footer() {
  const isMobile = useMatchMedia("(max-width: 1023px)");
  const isBelow500 = useMatchMedia("(max-width: 500px)");
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStayOpen, setIsStayOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <footer className="bg-[#181818] text-white px-4 py-8 md:px-8 lg:p-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-1 text-white">
        {/* SUPPORT */}
        <div className="lg:col-span-2">
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-[#3B4047] py-2 px-1"
            onClick={() => setIsSupportOpen(!isSupportOpen)}
          >
            <h3 className="text-lg font-bold uppercase lg:mb-1">Support</h3>
            <svg
              className={`text-white w-5 h-5 lg:hidden transform transition-transform duration-300 ${
                isSupportOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {(isMobile ? isSupportOpen : true) && (
            <div className="grid grid-cols-2 gap-4 text-base text-[#dfe0e1] px-1">
              <div>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Shipping and Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Return Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Promotion Exclusions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Do Not Sell or Share My Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Transparency in Supply Chain
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      NYC Flagship Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Las Vegas Flagship Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Store Locator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Buy a Gift Card
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Gift Card Balance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Service Discount
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Student Discount
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Refer a Friend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* ABOUT */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-[#3B4047] py-2 px-1"
            onClick={() => setIsAboutOpen(!isAboutOpen)}
          >
            <h3 className="text-lg font-bold uppercase lg:mb-1">About</h3>
            <svg
              className={`text-white w-5 h-5 lg:hidden transform transition-transform duration-300 ${
                isAboutOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {(isMobile ? isAboutOpen : true) && (
            <ul className="space-y-1 text-base text-[#dfe0e1] px-1">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Corporate News
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Press Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  #REFORM
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* STAY UP TO DATE */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-[#3B4047] py-2 px-1"
            onClick={() => setIsStayOpen(!isStayOpen)}
          >
            <h3 className="text-lg font-bold uppercase lg:mb-1">
              Stay up to date
            </h3>
            <svg
              className={`text-white w-5 h-5 lg:hidden transform transition-transform duration-300 ${
                isStayOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {(isMobile ? isStayOpen : true) && (
            <a
              href="#"
              className="hover:text-white transition-colors px-1 block"
            >
              Sign Up for Email
            </a>
          )}

          {/* EXPLORE */}
          <div className="lg:mt-6 mt-1">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-[#3B4047] py-2 px-1"
              onClick={() => setIsExploreOpen(!isExploreOpen)}
            >
              <h3 className="text-white font-bold text-lg lg:mb-4">EXPLORE</h3>
              <svg
                className={`text-white w-5 h-5 lg:hidden transform transition-transform duration-300 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path fill="transparent" d="M0 0h24v24H0z" />
                <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            {(isMobile ? isExploreOpen : true) && (
              <div className="flex gap-6 px-1 mt-2">
                <a
                  href="#"
                  className="w-15 h-15 p-3 border border-[#999999] hover:border-white rounded-md flex flex-col items-center justify-center"
                >
                  <img src={pumaApp} className="w-9 h-9 filter invert" />
                </a>

                <a
                  href="#"
                  className="w-15 h-15 p-3 border border-[#999999] hover:border-white rounded-md flex flex-col items-center justify-center"
                >
                  <img src={pumaTrac} className="w-9 h-9 filter invert" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full text-center inline-flex items-center justify-center gap-3 border border-[#676d75] hover:border-[#fff] px-6 py-2 mt-4 rounded-xs font-bold text-base text-white cursor-pointer">
        <img
          src="https://flagcdn.com/us.svg"
          alt="USA Flag"
          className="w-6 h-6 rounded-full object-cover"
        />
        UNITED STATES
      </div>

      {/* Divider */}
      <div className="border-t border-[#999999] my-6"></div>

      {/* Bottom Section */}
      <div
        className={`max-w-[1600px] mx-auto grid ${
          isBelow500 ? "grid-cols-1" : "grid-cols-2"
        } lg:grid-cols-3 gap-4 text-xs text-[#A1A8AF]`}
      >
        {/* Social Icons */}
        <div
          className={`flex ${
            isBelow500 ? "justify-between" : "gap-6"
          } text-white text-xl items-center`}
        >
          {/* YouTube */}
          <button className="min-w-10 min-h-10 w-10 h-10 hover:bg-[#3B4047] cursor-pointer rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.368 4.505a3.038 3.038 0 0 1 2.127 2.14c.505 1.882.505 5.81.505 5.81s0 3.927-.491 5.809c-.287 1.05-1.091 1.868-2.128 2.14C19.5 20.91 12 20.91 12 20.91s-7.5 0-9.368-.505a3.037 3.037 0 0 1-2.127-2.14C0 16.382 0 12.454 0 12.454s0-3.927.49-5.809c.287-1.05 1.091-1.868 2.128-2.14C4.5 4 11.999 4 11.999 4s7.5 0 9.369.505Zm-5.55 7.95L9.545 8.882v7.145l6.273-3.572Z"
              />
            </svg>
          </button>

          {/* X (Twitter) */}
          <button className="min-w-10 min-h-10 w-10 h-10 hover:bg-[#3B4047] cursor-pointer rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="icon"
            >
              <path
                fill="currentColor"
                d="M18.326 1.904H21.7l-7.37 8.423L23 21.79h-6.789l-5.317-6.952L4.81 21.79H1.434l7.883-9.01L1 1.904h6.961l4.806 6.354 5.56-6.354ZM17.142 19.77h1.87L6.945 3.817H4.94l12.203 15.954Z"
              />
            </svg>
          </button>

          {/* Pinterest */}
          <button className="min-w-10 min-h-10 w-10 h-10 hover:bg-[#3B4047] cursor-pointer rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="icon"
            >
              <path
                fill="currentColor"
                d="M1 12c0 4.504 2.708 8.374 6.584 10.075-.03-.768-.005-1.69.192-2.526l1.415-5.994s-.351-.702-.351-1.74c0-1.63.944-2.848 2.121-2.848 1 0 1.484.752 1.484 1.652 0 1.005-.642 2.51-.971 3.903-.276 1.167.585 2.119 1.736 2.119 2.084 0 3.488-2.677 3.488-5.848 0-2.411-1.624-4.216-4.578-4.216-3.336 0-5.415 2.489-5.415 5.268 0 .958.283 1.634.725 2.158.204.24.232.337.158.613-.053.202-.174.69-.224.882-.073.279-.299.379-.55.276-1.538-.628-2.253-2.31-2.253-4.203 0-3.124 2.635-6.871 7.861-6.871 4.2 0 6.964 3.039 6.964 6.301 0 4.315-2.399 7.539-5.935 7.539-1.188 0-2.305-.642-2.687-1.371 0 0-.639 2.534-.774 3.024-.234.848-.69 1.695-1.107 2.356.989.292 2.034.451 3.117.451 6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Z"
              />
            </svg>
          </button>

          {/* Instagram */}
          <button className="min-w-10 min-h-10 w-10 h-10 hover:bg-[#3B4047] cursor-pointer rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="icon"
            >
              <path
                fill="currentColor"
                d="M7.444 1.077c-1.17.055-1.97.242-2.668.517A5.383 5.383 0 0 0 2.83 2.866a5.388 5.388 0 0 0-1.265 1.95c-.271.7-.455 1.5-.506 2.67C1.007 8.659.996 9.035 1 12.022c.006 2.987.02 3.362.076 4.535.056 1.17.242 1.97.517 2.668a5.39 5.39 0 0 0 1.272 1.946c.612.61 1.225.985 1.951 1.265.7.27 1.5.455 2.67.506 1.172.052 1.548.063 4.535.058 2.986-.006 3.362-.02 4.535-.075 1.174-.055 1.968-.243 2.668-.516a5.391 5.391 0 0 0 1.945-1.273 5.393 5.393 0 0 0 1.265-1.95c.271-.7.455-1.5.506-2.67.051-1.175.063-1.55.058-4.536-.006-2.987-.02-3.361-.075-4.534-.056-1.173-.242-1.97-.516-2.67a5.401 5.401 0 0 0-1.273-1.945 5.368 5.368 0 0 0-1.95-1.265c-.7-.27-1.5-.455-2.67-.506-1.172-.05-1.549-.063-4.536-.058-2.987.006-3.361.019-4.535.076Zm.129 19.885c-1.073-.046-1.655-.224-2.043-.374a3.426 3.426 0 0 1-1.267-.82 3.388 3.388 0 0 1-.825-1.263c-.15-.388-.332-.97-.382-2.043-.055-1.159-.066-1.507-.073-4.444-.006-2.936.005-3.284.056-4.443.046-1.072.225-1.655.374-2.043.198-.515.436-.88.82-1.266.384-.387.75-.625 1.264-.826.388-.151.97-.331 2.041-.382 1.16-.055 1.508-.066 4.444-.072 2.937-.007 3.285.004 4.446.055 1.071.047 1.654.224 2.042.374.514.198.88.436 1.267.82.386.385.624.75.825 1.264.151.387.331.968.382 2.041.055 1.16.068 1.508.073 4.444.005 2.936-.005 3.285-.056 4.444-.047 1.073-.224 1.655-.374 2.044a3.41 3.41 0 0 1-.82 1.266c-.385.386-.75.624-1.264.825-.387.151-.97.332-2.04.383-1.16.054-1.509.066-4.446.072-2.937.006-3.284-.006-4.444-.056ZM16.54 6.121a1.32 1.32 0 1 0 2.642-.005 1.32 1.32 0 0 0-2.642.005Zm-10.188 5.89a5.648 5.648 0 1 0 11.296-.022 5.648 5.648 0 0 0-11.296.022Zm1.981-.004a3.667 3.667 0 1 1 7.334-.014 3.667 3.667 0 0 1-7.334.014Z"
              />
            </svg>
          </button>

          {/* Facebook */}
          <button className="min-w-10 min-h-10 w-10 h-10 hover:bg-[#3B4047] cursor-pointer rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="icon"
            >
              <path
                fill="currentColor"
                d="M12 .994c6.075 0 11 4.925 11 11 0 5.49-4.023 10.041-9.281 10.866v-7.686h2.563l.488-3.18h-3.051V9.93c0-.87.426-1.718 1.792-1.718h1.387V5.506s-1.258-.215-2.462-.215c-2.512 0-4.155 1.523-4.155 4.28v2.423H7.488v3.18h2.793v7.686C5.023 22.035 1 17.484 1 11.994c0-6.075 4.925-11 11-11Z"
              />
            </svg>
          </button>
        </div>

        {/* Country Selector */}
        <div className="hidden lg:block lg:col-span-1 text-center">
          <div className="hidden lg:inline-flex items-center gap-3 border border-[#676d75] hover:border-[#fff] px-6 py-3 rounded-xs font-bold text-lg text-white cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              alt="USA Flag"
              className="w-8 h-8 rounded-full object-cover"
            />
            UNITED STATES
          </div>
        </div>

        {/* Legal */}
        <div className="w-fit ml-auto text-right text-xs text-[#A1A8AF]">
          <p>© PUMA NORTH AMERICA, INC.</p>
          <a href="#" className="underline">
            IMPRINT AND LEGAL DATA
          </a>
          <br />
          <span>WEB ID: 429 222 391</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
