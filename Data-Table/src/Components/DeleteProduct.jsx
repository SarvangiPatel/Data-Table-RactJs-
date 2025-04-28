
import axios from 'axios';


   // delete function
  export const DeleteProduct = (id) => {
    axios
    .delete(`http://localhost:8000/products/${id}` , id)
    .then((res) => {
      alert("Product deleted Successfully");
      window.location.reload
    })
    .catch((err) => console.log(err));
};

