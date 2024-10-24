import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUserData = await authService.getCurrentUser();
        if (currentUserData) {
          dispatch(login(currentUserData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Sign Up</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline"
          >
            Sign In
          </Link>
        </p>
        
        {/* Display general error message */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit(create)}>
          <div>
            <Input
              className="w-full"
              label="Full Name"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {/* Display name-specific errors */}
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Input
              className="w-full"
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {/* Display email-specific errors */}
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Input
              className="w-full"
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {/* Display password-specific errors */}
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
