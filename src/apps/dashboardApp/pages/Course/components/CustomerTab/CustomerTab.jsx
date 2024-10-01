import React, { useState } from "react";
import "./CustomerTab.css";
import { customerData } from "../../../../../../data/dummyData";

export default function CustomerTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const customerDataPerPage = 10;

  const indexOfLastOrder = currentPage * customerDataPerPage;
  const indexOfFirstOrder = indexOfLastOrder - customerDataPerPage;
  const currentcustomerData = customerData.slice(indexOfFirstOrder, indexOfLastOrder);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customerData.length / customerDataPerPage); i++) {
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
            {currentcustomerData.map((customerData, index) => (
              <tr key={index}>
                <td>{customerData.id}</td>
                <td>{customerData.customer}</td>
                <td>{customerData.type}</td>
                <td>{customerData.country}</td>
                <td>{customerData.joined}</td>
                <td>{customerData.totalAmount}</td>
                <td>{customerData.lastOrderId}</td>
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
