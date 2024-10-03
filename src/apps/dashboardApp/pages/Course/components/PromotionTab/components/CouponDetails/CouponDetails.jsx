import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { couponUsers } from "../../../../../../../../data/dummyData";
import Table from "../../../Table/Table";
import Pagination from "../../../../../../../components/Pagination";

export default function CouponDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const location = useLocation();
  const { offerid } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const offerName = queryParams.get("offerName");

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = couponUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(couponUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const couponsColumns = [
    { header: "User Name", accessor: "username" },
    { header: "Code", accessor: "code" },
    { header: "Total Amount", accessor: "totalAmount" },
    { header: "Discount Amount", accessor: "discountAmount" },
  ];

  return (
    <div className="coupon-details mt-4 mb-5">
      <div className="container row justify-content-between align-items-center">
        <div className="col-8">
          <h3>Coupon Details / {offerName}</h3>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <button className="btn btn-primary">Edit Coupon</button>
        </div>
      </div>
      <Table columns={couponsColumns} data={currentUsers} />
      <div className="container row justify-content-between align-items-center">
        <div className="result col-2">
          <p className="mb-0">Results: {couponUsers.length}</p>
        </div>
        <div className="col-10 d-flex justify-content-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </div>
    </div>
  );
}
