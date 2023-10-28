import React, { useEffect, useState } from "react";
import "./breadcrumb.css";
import { RxAvatar } from "react-icons/rx";
import { useViewport } from "../../context/viewportContext";

// department list
const departments = ["Marketing", "Sales"];

interface breadcrumbProps {
  getDepartment: Function;
}

export default function Breadcrumb({ getDepartment }: breadcrumbProps) {
  // states
  const [chosenDepartment, setChosenDepartment] = useState(departments[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const changeDepartment = (index: number) => {
    setShowDropdown(false);
    setChosenDepartment(departments[index]);
  };

  const { isMobile } = useViewport();
  useEffect(() => {
    getDepartment(chosenDepartment);
  });
  return (
    <div className="breadcrumb">
      <img src={isMobile ? "/logoSmall.png" : "/logo2.png"} alt="logo" />

      <div className="breadcrumb_right">
        <div className="departmentBox" onClick={() => setShowDropdown(true)}>
          <p>Department: </p>
          <p>{chosenDepartment}</p>
        </div>
        {showDropdown && (
          <div className="department_dropdown">
            {departments.map((department, index) => {
              return (
                <>
                  <p key={index} onClick={() => changeDepartment(index)}>
                    {department}
                  </p>
                  <hr />
                </>
              );
            })}
          </div>
        )}
        <div className="user">
          <RxAvatar className="avatarIcon" />
          <p>Nithin</p>
        </div>
      </div>
    </div>
  );
}
