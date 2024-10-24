import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { type = "text", label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700 text-left"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-4 py-2 rounded-md bg-gray-100 text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 border border-gray-300 transition-all duration-200 ease-in-out w-full text-left ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
