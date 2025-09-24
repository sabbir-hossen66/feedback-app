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
      containerClassName="flex justify-center gap-2 mt-6"
      pageClassName="px-3 py-1 border rounded-lg bg-white shadow"
      activeClassName="bg-blue-600 text-white"
      previousClassName="px-3 py-1 border rounded-lg bg-white shadow"
      nextClassName="px-3 py-1 border rounded-lg bg-white shadow"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}
