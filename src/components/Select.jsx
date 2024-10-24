import React, { useId } from "react";
import PropTypes from "prop-types";

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  ref: PropTypes.any,
  label: PropTypes.string,
};

function Select({ label, className = "", options, ref, ...props }) {
  const id = useId();
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-800 font-medium mb-2 text-sm"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={`px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full duration-200 ease-in-out hover:bg-gray-200 ${className}`}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
