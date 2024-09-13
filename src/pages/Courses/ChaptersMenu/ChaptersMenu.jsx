import React from "react";

export default function ChaptersMenu() {
  const appearChaptersMenu = () => {};

  return (
    <div className="w-100 mt-3">
      <div
        onClick={appearChaptersMenu}
        className="d-flex justify-content-between w-100"
      >
        <p>Number of Chapters</p>
        <i className="fa-solid fa-angle-down ps-2 align-items-center"></i>
      </div>
      <hr />
      <div className="">
        <div className="d-flex align-items-center mb-2">
          <input type="checkbox" id="checkbox1-10" className="checkbox" />
          <label htmlFor="checkbox1-10" className="">
            1-10
          </label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="checkbox" id="checkbox1-10" className="checkbox" />
          <label htmlFor="checkbox1-10" className="">
            10-15
          </label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="checkbox" id="checkbox1-10" className="checkbox" />
          <label htmlFor="checkbox1-10" className="">
            15-20
          </label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="checkbox" id="checkbox1-10" className="checkbox" />
          <label htmlFor="checkbox1-10" className="">
            20-25
          </label>
        </div>
      </div>
    </div>
  );
}
