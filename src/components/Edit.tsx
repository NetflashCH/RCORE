import React from "react";
import { cardActive, dataTypes, deleteData, toggleActive } from "../store/Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface EditType {
  item: dataTypes;
}

const Edit: React.FC<EditType> = ({ item }) => {
  const store = useSelector((state: RootState) => state.data);
  const disptch = useDispatch();
  const router = useNavigate();

  return (
    <div className=" w-[1090.2px] px-4 grid gap-6">
      <h2 className="flex items-end text-2xl font-bold">{item.name}</h2>

      <div className="bg-[#161621]  rounded-[.5rem] grid gap-[2rem] pt-4 pb-[2.5rem] px-[2.5rem] ">
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
            className="px-6 py-3 text-md  font-bold text-black bg-[#F29E20] rounded-lg"
          >
            Change Position / Rotation
          </button>
          <button
            type="button"
            className="px-6 py-3 text-md  font-bold text-black bg-[#F29E20] rounded-lg"
          >
            Chagnge Scaleform Rotation
          </button>
          <button
            type="button"
            className="px-6 py-3 text-md  font-bold text-black bg-[#F29E20] rounded-lg"
          >
            Tleleport to Board
          </button>
        </div>

        <div className="flex items-center justify-start gap-[2rem]">
          <button
            type="button"
            className="flex items-center gap-3 w-[150px] justify-center px-6 py-3 text-md  font-bold text-black bg-[#F29E20] rounded-lg"
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
            <span className="text-[1.1rem] font-[600] my-auto">Edit</span>
          </button>
          <button
            type="button"
            onClick={() => {
              disptch(deleteData(store.cardData));
              disptch(toggleActive());
            }}
            className="flex items-center gap-3 w-[150px] justify-center px-6 py-3 text-md  font-bold text-black bg-[#f22020] rounded-lg"
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
            <span className="text-[1.1rem] font-[600] my-auto">Delete</span>
          </button>
        </div>
      </div>
      <button
        className="flex place-content-start ml-4"
        type="button"
        onClick={() => {
          disptch(toggleActive());
        }}
      >
        back to overview
      </button>
    </div>
  );
};

Edit.displayName = "Edit";
export default Edit;
