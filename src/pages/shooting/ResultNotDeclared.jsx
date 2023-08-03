import { Link } from "react-router-dom";
export default function ResultNotDeclared() {
  return (
    <div className="py-20 px-8 text-red-700 text-center">
      <h1 className="text-6xl font-bold">Final Result not declared!
      </h1>
      <p className="mt-6 text-xl lg:text-4xl">
        Sorry, the result you're looking for is not yet declared.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring focus-visible:ring-indigo-300 focus-visible:ring-opacity-50"
        >
          Go back home
        </Link>
        <Link to="/contact" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
