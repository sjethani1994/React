import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/HomeButtons.css";
import axios from "axios";
import API from "../connection/connection";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const headers = {
          Authorization: token,
        };

        const response = await axios.get(`${API}/blogs/getAllBlogs`, {
          headers: headers,
        });

        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    if (blogs.length === 0) {
      fetchData(); // Fetch data only if blogs state is empty
    }
  }, [blogs]); // Add blogs state as a dependency

  return (
    <div className="body">
      {blogs.length !== 0 ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <Bloglist blog={blog} />
            </div>
          ))}
        </div>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  );
};

export default Home;
