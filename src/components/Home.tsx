import React from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import Edit from "./Edit";
import { cardActive, dataTypes } from "../store/Data";

const Home = () => {
  const store = useSelector((state: RootState) => state.data);
  const disptch = useDispatch()
  return (
    <>
      {!store.active ? (
        <section className="  w-[1090.2px]">
          <form className="flex center start bg-[#161621] relative h-[50px] mb-[30px]">
            <svg
              fill="white"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="absolute top-1/2 left-3 -translate-y-1/2"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search.."
              className="border-none w-full  pl-[2.9rem] focus-visible:outline-none  py-[.5rem] bg-transparent"
            />
          </form>

          <ul className="card__wrapper grid cneter grid-cols-2 place-content-start gap-[2rem] overflow-y-auto h-[735px]">
            {store.data.map((item, index) => {
              return (
                <>
                  <li
                    key={index+'fsd'}
                    className="h-[223.14px] grid gap-[1.5rem] p-[1rem] bg-[#161621] rounded-[.5rem]"
                  >
                    <div className="flex center justify-between gap-[1rem] h-[24px]">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex items-center gap-[1rem] w-max h-max">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6_181)">
                            <path
                              d="M24.25 0.875V0H22.5V0.875V1.75H21.625H20.75V3.5H21.625H22.5V4.375V5.25H24.25V4.375V3.5H25.125H26V1.75H25.125H24.25V0.875ZM1.5 6.125V5.25H-0.25V6.125V7H-1.125H-2V8.75H-1.125H-0.25V9.625V10.5H1.5V9.625V8.75H2.375H3.25V7H2.375H1.5V6.125ZM12 1.75C12.1724 1.75 12.343 1.78395 12.5023 1.84991C12.6615 1.91587 12.8062 2.01255 12.9281 2.13442C13.05 2.2563 13.1466 2.40099 13.2126 2.56023C13.2786 2.71947 13.3125 2.89014 13.3125 3.0625C13.3125 3.23486 13.2786 3.40553 13.2126 3.56477C13.1466 3.72401 13.05 3.8687 12.9281 3.99058C12.8062 4.11245 12.6615 4.20913 12.5023 4.27509C12.343 4.34105 12.1724 4.375 12 4.375C11.8276 4.375 11.657 4.34105 11.4977 4.27509C11.3385 4.20913 11.1938 4.11245 11.0719 3.99058C10.95 3.8687 10.8534 3.72401 10.7874 3.56477C10.7214 3.40553 10.6875 3.23486 10.6875 3.0625C10.6875 2.89014 10.7214 2.71947 10.7874 2.56023C10.8534 2.40099 10.95 2.2563 11.0719 2.13442C11.1938 2.01255 11.3385 1.91587 11.4977 1.84991C11.657 1.78395 11.8276 1.75 12 1.75ZM12 6.125C12.8122 6.125 13.5912 5.80234 14.1655 5.22801C14.7398 4.65368 15.0625 3.87473 15.0625 3.0625C15.0625 2.25027 14.7398 1.47132 14.1655 0.896985C13.5912 0.322655 12.8122 0 12 0C11.1878 0 10.4088 0.322655 9.83449 0.896985C9.26016 1.47132 8.9375 2.25027 8.9375 3.0625C8.9375 3.87473 9.26016 4.65368 9.83449 5.22801C10.4088 5.80234 11.1878 6.125 12 6.125ZM20.75 24.5H19.875H4.125H3.25V25.375V27.125V28H5V27.125V26.25H19V27.125V28H20.75V27.125V25.375V24.5ZM6.75 7V8.75H7.625H16.375H17.25V7H16.375H7.625H6.75ZM5 10.5V12.25H5.875H18.125H19V10.5H18.125H5.875H5ZM3.25 14V15.75H4.125H19.875H20.75V14H19.875H4.125H3.25ZM6.75 17.5V19.25H7.625H16.375H17.25V17.5H16.375H7.625H6.75ZM6.75 21V22.75H7.625H16.375H17.25V21H16.375H7.625H6.75Z"
                              fill="#F29E20"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_6_181">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <button
                          type="button"
                          onClick={() => {disptch(cardActive(item))}}
                          className="flex place-content-center
                gap-[.5rem] bg-[#F29E20] w-[90px] h-[32px] rounded-[.5rem]"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            className="my-auto"
                          >
                            <path d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
                          </svg>
                          <span className="text-[1.1rem] font-[600] my-auto">
                            Edit
                          </span>
                        </button>
                      </div>
                    </div>
                    <ul className="bg-[#282B43] rounded-[.5rem] grid gap-[1rem] py-[1rem] px-[1.5rem]">
                      <li className="flex center text-[1.1rem] font-[500]">
                        <span className="w-[35%]">Model</span>
                        <span>{item.model}</span>
                      </li>
                      <li className="flex center text-[1.1rem] font-[500]">
                        <span className="w-[35%]">URL</span>
                        <span>{item.url} </span>
                      </li>
                      <li className="flex center text-[1.1rem] font-[500]">
                        <span className="w-[35%]">Position</span>
                        <span>
                          X:{item.position.x}, Y:{item.position.y}, Z:
                          {item.position.z}
                        </span>
                      </li>
                    </ul>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      ) : (
        <Edit
          item={store.cardData as dataTypes}
        />
      )}
    </>
  );
};

export default Home;
