import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const EntriPagination = ({
  pageCount,
  buttonClick,
  currentPage,
  setCurrentPage,
}) => {
  const handleClick = (no) => {
    buttonClick(no);
    setCurrentPage(no);
  };

  const minusButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const plusButton = () => {
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const totalPages = pageCount;
    const visiblePages = 3; // Adjust the number of visible pages as needed

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => (
        <div
          className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer"
          style={{
            backgroundColor: currentPage === index + 1 ? "#e2e8f0" : "white",
          }}
          key={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ));
    }

    const firstPageNumbers = Array.from(
      { length: visiblePages },
      (_, index) => (
        <div
          className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer"
          style={{
            backgroundColor: currentPage === index + 1 ? "#e2e8f0" : "white",
          }}
          key={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      )
    );

    const lastPageNumbers = Array.from({ length: visiblePages }, (_, index) => (
      <div
        className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer"
        style={{
          backgroundColor:
            currentPage === totalPages - visiblePages + index + 1
              ? "#e2e8f0"
              : "white",
        }}
        key={totalPages - visiblePages + index + 1}
        onClick={() => handleClick(totalPages - visiblePages + index + 1)}
      >
        {totalPages - visiblePages + index + 1}
      </div>
    ));

    return [
      ...firstPageNumbers,
      <span key="ellipsis">...</span>,
      ...lastPageNumbers,
    ];
  };

  return (
    <div className="mx-auto my-10 flex items-center justify-center gap-3">
      <div
        className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border"
        onClick={minusButton}
      >
        <FaLessThan />
      </div>
      {renderPageNumbers()}
      <div
        className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border"
        onClick={plusButton}
      >
        <FaGreaterThan />
      </div>
    </div>
  );
};

export default EntriPagination;
