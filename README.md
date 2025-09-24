# Feedback App

A modern **Feedback App** built with **Next.js (TypeScript)** and **React**, allowing users to submit feedback and view all submissions in a paginated list.  

**Live Demo:** [https://feedback-app-smoky-five.vercel.app/](https://feedback-app-smoky-five.vercel.app/)  
**GitHub Repository:** [https://github.com/sabbir-hossen66/feedback-app](https://github.com/sabbir-hossen66/feedback-app)

---

## Features

- Submit user feedback via a responsive **feedback form**.
- View all submitted feedback in a **paginated list** using **react-paginate**.
- Form validation handled by **react-hook-form**.
- Responsive and clean UI built with **Tailwind CSS**.
- Feedback data is fetched from a **Next.js API route** and cached in `localStorage`.
- Loading indicator while fetching data with **react-spinners**.

---

## Tech Stack

- **Frontend & Backend:** Next.js (TypeScript)  
- **Form Handling:** react-hook-form  
- **Pagination:** react-paginate  
- **Styling:** Tailwind CSS  
- **Loading Spinner:** react-spinners  
- **Deployment:** Vercel  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sabbir-hossen66/feedback-app.git
cd feedback-app
npm install
# or
yarn install
npm run dev
# or
yarn dev
Usage

Fill out the feedback form and submit your feedback.

The feedback will appear below the form in a paginated list.

Navigate between pages using the pagination controls.
