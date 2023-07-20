import React from "react";

export const ListElements = (props) => {
  return (
    <div>
      <ul className=" list-inside mt-10 list-disc">
        <li>{props.listOne}</li>
        <li>{props.listTwo}</li>
        <li>{props.listThree}</li>
        <li>{props.listFour}</li>
      </ul>
    </div>
  );
};
