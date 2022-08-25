import React from "react";
import './Pagination.css'
import ReactPaginate from "react-paginate";
const PaginationComponent = ({getPage,countPage}) => {
  const handlePageClick = (data) => {
    getPage(data.selected +1)
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={countPage}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center my-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        activeLinkClassName={"page-link"}
      />
    </>
  );
};

export default PaginationComponent;