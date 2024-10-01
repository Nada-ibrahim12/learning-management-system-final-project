import React, { useState } from "react";
import "./CommissionTab.css";
import { orders } from "../../../../../../data/dummyData";

export default function CommissionTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
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
                Order ID
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
                Date
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Status
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Commission
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {currentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.customer}</td>
                <td>{order.type}</td>
                <td>{order.date}</td>
                <td
                  style={{
                    color: order.status === "Received" ? "green" : "yellow",
                  }}
                >
                  {order.status}
                </td>
                <td>{order.commission}</td>
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
