import React, { useState } from "react";
import "./ChaptersTabDetailsTab.css";
import { chapters } from "../../../../../../../data/dummyData";

export default function ChaptersTabDetailsTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 10;

  const indexOfLastOrder = currentPage * chaptersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - chaptersPerPage;
  const currentchapters = chapters.slice(indexOfFirstOrder, indexOfLastOrder);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(chapters.length / chaptersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="commission-tab container-fluid">
      <div className="tableData py-2">
        <table className="table table-hover w-100 text-center">
          <thead>
            <tr>
              <th>
                ID
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Customer
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Type
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Country
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Joined
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Total Amount
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Last Order
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {currentchapters.map((chapter, index) => (
              <tr key={index}>
                <td>{chapter.id}</td>
                <td>{chapter.chapter}</td>
                <td>{chapter.title}</td>
                <td>{chapter.type}</td>
                <td>{chapter.date}</td>
                <td>{chapter.status}</td>
                <td>{chapter.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="d-flex justify-content-center my-5">
          <ul className="pagination pagination-sm">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={handlePreviousPage}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pageNumbers.map((num) => (
              <li
                key={num}
                onClick={() => handlePageChange(num)}
                className={`page-item ${currentPage === num ? "active" : ""}`}
              >
                <a className="page-link" href="#">
                  {num}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === pageNumbers.length ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={handleNextPage}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
