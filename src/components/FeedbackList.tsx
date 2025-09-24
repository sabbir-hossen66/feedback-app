"use client";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";

type Feedback = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export default function FeedbackList({ refresh }: { refresh: number }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true); // ✅ page loader

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true); // start loader
      const res = await fetch("/api/feedback");
      const data = await res.json();

      if (data.success) {
        setFeedbacks(data.feedbacks);
        localStorage.setItem("feedbacks", JSON.stringify(data.feedbacks));
      }
      setLoading(false); // stop loader
    };

    fetchFeedbacks();
  }, [refresh]);

  useEffect(() => {
    const saved = localStorage.getItem("feedbacks");
    if (saved) {
      setFeedbacks(JSON.parse(saved));
    }
  }, []);

  const { currentItems, pageCount, handlePageClick } = usePagination(feedbacks, 3);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader size={40} color="#3b82f6" />
      </div>
    );
  }

  return (
    <div className="mt-6 max-w-lg w-full">
      <h2 className="text-lg font-semibold mb-3">All Feedback</h2>

      {currentItems.length === 0 ? (
        <p className="text-gray-500">No feedback yet.</p>
      ) : (
        <ul className="space-y-3">
          {currentItems.map((fb) => (
            <li
              key={fb.id}
              className="p-4 border border-primary rounded-lg bg-gray-50 shadow-sm"
            >
              <p className="font-medium text-gray-800">Name: {fb.name}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {fb.email}</p>
              <p className="mt-2 text-gray-700"><span className="font-medium">Message:</span> {fb.message}</p>
            </li>
          ))}
        </ul>
      )}

      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
}
