"use client";
import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";

export default function Home() {
  const [refresh, setRefresh] = useState(0);

  return (
   <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Give Your Feedback</h2>
      <FeedbackForm onSubmit={() => setRefresh((prev) => prev + 1)} />
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <FeedbackList refresh={refresh} />
    </div>
  </div>
</main>

  );
}

