import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
        setAuthUser({
            ...authUser,
            user:null,
        })
        localStorage.removeItem("User");
        toast.success("Logged out Successfully")
        setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch (error) {
        console.log("Error: " + error.message);
        setTimeout(() => {}, 1000);

    }
  };
  return <div>
     <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </div>;
};

export default Logout;
