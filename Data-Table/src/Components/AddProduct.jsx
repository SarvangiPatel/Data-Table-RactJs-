import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const proObj = {
    title: "",
    desc: "",
    category: "",
    image: "",
    price: "",
  };

  const [addData, setaddData] = useState(proObj);

  // Post data
  const handleChange = (e) => {
    setaddData({ ...addData, [e.target.name]: e.target.value });
  };

  const { title, desc, category, price, image } = addData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/products",addData)
      .then((res) => {
        alert("Product Added Successfully");
        console.log(addData)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-container">
        <h1 style={{textAlign:"center"}}>Add Product</h1>
        <form action="" onSubmit={handleSubmit}>
          
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="title"
              /> <br /><br />
            

        
              <input
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                placeholder="image"
              /><br /><br />
             
           
           
              {" "}
              <input
                type="text"
                name="desc"
                value={desc}
                onChange={handleChange}
                placeholder="description"
              /><br /><br />
          

         
              <select
                name="category"
                value={category}
                onChange={handleChange}
              
              >
                <option value="">Select Your category</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Gaming">Gaming</option>
                <option value="Furniture">Furniture</option>
                <option value="All Product"> All Product</option>
              </select><br /><br />
           

        
              <input
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
                placeholder="price"
              /><br /><br />
           
          <button type="submit" className="submit-btn">
            Insert Data
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
