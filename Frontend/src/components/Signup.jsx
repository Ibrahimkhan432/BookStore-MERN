import React from "react";
import Login from "./Login";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });

        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log("err", err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="">
            {/* if there is a button in form, it will close the modal */}

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-blue-700">Signup</h3>
            <div className="m-4 space-y-4">
              {/* name field */}
              <h2>Name</h2>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your Name"
                {...register("fullName", { required: true })}
                className="border-slate-200 border-2 p-2 rounded-md"
              />
              <br />
              {errors.fullName && (
                <span className="text-[12px] text-red-500">
                  *This field is required
                </span>
              )}

              {/* email field */}
              <h2>Email</h2>
              <input
                type="text"
                name=""
                placeholder="Enter your Email"
                {...register("email", { required: true })}
                className="border-slate-200 border-2 p-2 rounded-md"
              />
              <br />
              {errors.email && (
                <span className="text-[12px] text-red-500">
                  *This field is required
                </span>
              )}

              {/* password field*/}
              <h2 className="mt-4">Password</h2>
              <input
                type="password"
                name=""
                placeholder="Enter your Password"
                {...register("password", { required: true })}
                className="border-slate-200 border-2 p-2 rounded-md"
              />
              <br />
              {errors.password && (
                <span className="text-[12px] text-red-500">
                  *This field is required
                </span>
              )}
            </div>

            <div className="flex justify-between mt-5">
              <button className="p-2 px-3 rounded-md btn-primary bg-blue-700 text-white ">
                Signup
              </button>
              <h5>
                Already have account ?{" "}
                <button
                  className="underline text-blue-600"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </h5>
            </div>
          </form>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Signup;
