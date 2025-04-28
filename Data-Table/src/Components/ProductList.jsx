import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteProduct } from "./DeleteProduct";

const Productlist = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/products?q=${search}&_limit=5&_page=${page}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let id = setTimeout(() => {
      selectedCategory ? cate() : fetchData();
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [search, page, selectedCategory]);

  // sorting
  // low to high

  function ascending() {
    const stored = [...data].sort((a, b) => {
      return a.price - b.price;
    });
    setdata(stored);
  }

  // high to low

  const descending = () => {
    const stored = [...data].sort((a, b) => {
      return b.price - a.price;
    });
    setdata(stored);
  };

  // filtering
  function cate() {
    axios.get(`http://localhost:8000/products?category=${selectedCategory}`)
      .then((data) => setdata(data.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="products">
        <div>
          <input
            type="text"
            placeholder="Search here"
            className="search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />

          <div className="main-product">
            <div className="left">
              {/* sorting */}

              <div className="select-cat">
                <h3 className="text-center mb-4 mt-3">Sort Based On Price</h3>
                <button onClick={ascending}>Low To High</button>
                <br />
                <br />
                <button onClick={descending}>High To Low</button>
                <div className="filter">
                  <h3 className="text-center mb-4 mt-3">
                    Filter Based On Category
                  </h3>
                  <label>Electronics</label>{" "}
                  <input
                    type="radio"
                    name="category"
                    value="Electronics"
                    checked={selectedCategory === "Electronics"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <br></br>
                  <label>Accessories</label>{" "}
                  <input
                    type="radio"
                    name="category"
                    value="Accessories"
                    checked={selectedCategory === "Accessories"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <br></br>
                  <label>Gaming</label>{" "}
                  <input
                    type="radio"
                    name="category"
                    value="Gaming"
                    checked={selectedCategory === "Gaming"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <br></br>
                  <label>Furniture</label>{" "}
                  <input
                    type="radio"
                    name="category"
                    value="Furniture"
                    checked={selectedCategory === "Furniture"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <br></br>
                </div>
              </div>
            </div>

            <div className="right">
              {data.map((el) => {
                return (
                  <div key={el.id}>
                    <Link to={`/productdetails/${el.id}`}>
                      <img src={el.image} alt="" height={200} width={200} />
                    </Link>

                    <h5>{el.title}</h5>
                    <p>{el.category}</p>
                    <h6>${el.price}</h6>

                    <button>
                      <Link to={`/editproduct/${el.id}`}>EDIT</Link>
                    </button>

                    <button onClick={() => DeleteProduct(el.id)}>DELETE</button>
                  </div>
                );
              })}

              {/* pagination */}

              <div className="pagination mt-5">
                <button
                  disabled={page == 1}
                  className="page-btn"
                  onClick={() => setpage(page - 1)}
                >
                  Prev
                </button>
                <span className="ps-3 pe-3">{page}</span>
                <button
                  disabled={page == 4}
                  className="page-btn"
                  onClick={() => setpage(page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
