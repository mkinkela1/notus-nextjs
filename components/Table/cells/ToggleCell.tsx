import React from "react";

interface IProps {
  value: boolean;
  onChange: () => void;
}

export default function ToggleCell({ value, onChange }: IProps) {
  return (
    <div className="flex w-full">
      <div className="form-check form-switch">
        {/*<input*/}
        {/*  className="form-check-input appearance-none rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"*/}
        {/*  type="checkbox"*/}
        {/*  role="switch"*/}
        {/*  id="flexSwitchCheckDefault56"*/}
        {/*  checked={value}*/}
        {/*  onChange={onChange}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
