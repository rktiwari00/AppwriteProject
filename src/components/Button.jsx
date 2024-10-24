function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
