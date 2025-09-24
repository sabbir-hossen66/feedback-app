"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type FeedbackInputs = {
  name: string;
  email: string;
  message: string;
};

export default function FeedbackForm({ onSubmit }: { onSubmit: () => void }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackInputs>();

  const onFormSubmit = async (data: FeedbackInputs) => {
    setLoading(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        reset();
        onSubmit();
      } else {
        alert("Failed to submit feedback");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-4 bg-white shadow p-6 rounded-xl max-w-lg w-full"
    >
      <h2 className="text-xl font-semibold text-gray-800">Submit Feedback</h2>

      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-lg border-[#AB3AE0] focus:outline-none focus:ring-2 focus:ring-[#AB3AE0]"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded-lg border-[#AB3AE0] focus:outline-none focus:ring-2 focus:ring-[#AB3AE0]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Your Feedback"
          rows={4}
          className="w-full p-2 border rounded-lg border-[#AB3AE0] focus:outline-none focus:ring-2 focus:ring-[#AB3AE0]"
          {...register("message", { required: "Feedback is required" })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-primary text-white py-2 rounded-lg hover:bg-primary transition disabled:opacity-70 cursor-pointer"
      >
        {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
      </button>
    </form>
  );
}
