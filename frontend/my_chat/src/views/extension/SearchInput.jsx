import React from "react";

function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          className="input input-bordered rounded-full"
          placeholder="Search"
        />
        <button
          type="submit"
          className="btn btn-circle bg-[#fffdd071] outline-none border-none text-white"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
