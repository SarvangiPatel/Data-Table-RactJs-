import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const proObj = {
    id: "",
    title: "",
    desc: "",
    category: "",
    image: "",
    price: "",
  };

  const [editData, seteditData] = useState(proObj);
  const { title, desc, category, price, image } = editData;

  // Fetch the existing product data
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        seteditData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch product data:", err);
      });
  }, [id]);

  const handleChange = (e) => {
    seteditData({ ...editData, [e.target.name]: e.target.value });
  };

  // edit data

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/products/${id}`, editData)
      .then((res) => {
        alert("Product edit Successfully");
        seteditData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-container">
        <h1 style={{ textAlign: "center" }}>Edit Product</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleChange}
            placeholder="id"
          />
          <br />
          <br />

          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="title"
          />
          <br />
          <br />

          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
            placeholder="image"
          />
          <br />
          <br />

          <input
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
            placeholder="description"
          />
          <br />
          <br />

          <select name="category" value={category} onChange={handleChange}>
            <option value="">Select Your category</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Gaming">Gaming</option>
            <option value="Furniture">Furniture</option>
            <option value="All Product"> All Product</option>
          </select>
          <br />
          <br />

          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="price"
          />
          <br />
          <br />

          <button type="submit" className="submit-btn">
            Edit Data
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
