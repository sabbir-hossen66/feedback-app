"use client";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
};

export default function Pagination({ pageCount, onPageChange }: Props) {
  if (pageCount <= 1) return null;

  return (
 <ReactPaginate
  breakLabel="..."
  nextLabel="Next →"
  previousLabel="← Prev"
  onPageChange={onPageChange}
  pageRangeDisplayed={3}
  marginPagesDisplayed={1}
  pageCount={pageCount}
  containerClassName="flex justify-center items-center gap-2 mt-6"
  pageClassName="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition-colors cursor-pointer"
  pageLinkClassName="font-medium"
  activeClassName="bg-blue-600 text-white border-blue-600 shadow-md scale-105 transform transition-all"
  previousClassName="px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors cursor-pointer bg-primary text-white"
  previousLinkClassName="font-medium flex items-center"
  nextClassName="px-4 py-2 border border-gray-300 rounded-lg bg-primary shadow-sm text-white transition-colors cursor-pointer"
  nextLinkClassName="font-medium flex items-center"
  breakClassName="px-3 py-2 cursor-default text-gray-400"
  disabledClassName="opacity-50 cursor-not-allowed"
/>
  );
}
