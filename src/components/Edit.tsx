import React, { useState } from "react";
import {
  cardActive,
  dataTypes,
  deleteData,
  showEditData,
  toggleActive,
} from "../store/Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface EditType {
  item: dataTypes;
}

const Edit: React.FC<EditType> = ({ item }) => {
  const store = useSelector((state: RootState) => state.data);
  const disptch = useDispatch();
  const route = useNavigate();

  return (
    <div className=" w-[1090.2px] px-4  gap-6">
      <div className="flex items-center justify-between mb-[2rem]">
        <h2 className="flex items-end text-2xl font-bold">{item.name}</h2>
        <button
          className="flex items-center gap-3  ml-4 px-[1.2rem] py-[.7rem] rounded-lg text-[#282B43] bg-[#F29E20]"
          type="button"
          onClick={() => {
            disptch(toggleActive());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            fill="#282B43"
            className="mt-[-.2rem]"
            width={20}
            height={20}
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
          </svg>
          <span className="font-semibold">back to overview</span>
        </button>
      </div>
      <div className="bg-[#161621]  rounded-[.5rem] grid gap-[2rem] h-[90.5%] pt-3 pb-[2.5rem] px-[2.5rem] ">
        <ul className=" grid gap-[1rem] pt-[1rem] pb-[3rem] border-b-2 border-zinc-700">
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
          <li className="flex center text-[1.1rem] font-[500]">
            <span className="w-[35%]">Read Only</span>
            <span>{`${item.readonly}`} </span>
          </li>
          <li className="flex center text-[1.1rem] font-[500]">
            <span className="w-[35%]">Ace Permissions</span>
            <span>{`${item.ace}`}</span>
          </li>
          <li className="flex center text-[1.1rem] font-[500]">
            <span className="w-[35%]">Jobs</span>
            <span>{item.jobs}</span>
          </li>
          <li className="flex center text-[1.1rem] font-[500]">
            <span className="w-[35%]">Grades</span>
            <span>{item.grades}</span>
          </li>
          <li className="flex center text-[1.1rem] font-[500]">
            <span className="w-[35%]">Interaction Distance</span>
            <span>{item.interactionDistance}</span>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="px-6 py-3 text-md  font-bold text-[#282B43] bg-[#F29E20] rounded-lg"
          >
            Change Position / Rotation
          </button>
          <button
            type="button"
            className="px-6 py-3 text-md  font-bold text-[#282B43] bg-[#F29E20] rounded-lg"
          >
            Chagnge Scaleform Rotation
          </button>
          <button
            type="button"
            className="px-6 py-3 text-md  font-bold text-[#282B43] bg-[#F29E20] rounded-lg"
          >
            Tleleport to Board
          </button>
        </div>

        <div className="flex items-center justify-start gap-[2rem]">
          <button
            type="button"
            onClick={() => {
              disptch(showEditData(item));
              route("/editcardData");
            }}
            className="flex items-center gap-3 w-[150px] justify-center px-6 py-3 text-md  text-[#282B43] bg-[#F29E20] rounded-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#282B43"
              className="my-auto"
            >
              <path d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
            </svg>
            <span className="text-[1rem] font-[600] my-auto">Edit</span>
          </button>
          <button
            type="button"
            onClick={() => {
              disptch(deleteData(store.cardData));
              disptch(toggleActive());
            }}
            className="flex items-center gap-3 w-[150px] justify-center px-6 py-3 text-md   text-[#282B43] bg-[#f22020] rounded-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#282B43"
              className="my-auto"
            >
              <path d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
            </svg>
            <span className="text-[1rem] font-[600] my-auto">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Edit.displayName = "Edit";
export default Edit;
