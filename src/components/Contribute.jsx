import React from "react";
import { Button } from "./Button";
import { NavLink, useNavigate } from "react-router-dom";

export const Contribute = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={props.cls_name}>
        <div className="">
          <h3 className="md:text-[1.5rem] text-[1.2rem] mt-8 font-bold ">
            {props.title}
          </h3>
          <p className="md:text-justify pt">{props.content}</p>

            <div>{props.listElemts}</div>
          <Button
            value={props.value}
            onSmash={() => navigate(props.page)}
            cls_name="text-white bg-[#0F9D58] rounded-[4px] mt-8 mb-10 border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
          />
        </div>
      </div>
    </div>
  );
};
