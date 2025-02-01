import React from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log("err", err);
          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </button>
            <h3 className="font-bold text-lg text-blue-700">Login</h3>
            <div className="m-4 space-y-4">
              {/* eamil field */}
              <h2>Email</h2>
              <input
                type="text"
                name="email"
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
              {/* password field */}
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
                Login
              </button>
              <h5>
                Not registered ?{" "}
                <Link to={"/signup"} className="underline text-blue-600">
                  Signup
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
