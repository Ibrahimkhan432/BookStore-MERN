import React, { useEffect, useState } from "react";
// console.log(list);
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="justify-center align-item-center text-center">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center align-item-center justify-center py-28">
          <h1 className="font-semi-bold  text-2xl">
            Explore Our Top Notch Courses
          </h1>
          <p className="text-slate-700 ml-4 mr-4 mt-8">
            "Unlock endless opportunities with our expertly crafted free
            courses. From professional development to personal growth, we offer
            something for everyone. Start learning today and achieve your
            goals!"
          </p>
          <Link to={"/"}>
            <button className="border-2 rounded-md py-3 bg-blue-700 text-white px-4 mt-9">
              Back
            </button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto ">
          {book.map((item) => {
            return (
              <div className="" key={item.id}>
                <Cards key={item.id} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
