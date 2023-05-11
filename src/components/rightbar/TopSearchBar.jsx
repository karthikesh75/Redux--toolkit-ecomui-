import React, { useState } from "react";
import { useEffect } from "react";
import "../rightbar/TopSearchBar.css";
import axios from "axios";
import AddToCart from "./AddToCart";
import { Link,  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import {addtocartaction} from "../../redux/CounterSlice"

function TopSearchBar() {
  const navigate = useNavigate()
  const [cemvalue,setCemValue] = useState([])
  const [cartNo, setCartNo] = useState(0);
  const [gettingValue, GettingValue] = useState("cement");
  const [searchData, setSearchData] = useState([]);
  const inputHandler = (e) => {
    GettingValue(e.target.value);
  };
  console.log("gettingValue==>",gettingValue);
  useEffect(() => {
    handleSubmit();
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    
    fetch("http://192.168.2.110:8000/fetch/?size=25&page=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: gettingValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
         console.log(data, "><><><><><><12345645676");
      })
      .catch((error) => console.error(error));
  };
  const cartbtnfun = () => {
    // navigate("/addtocart")
    navigate('/addtocart', { state: cemvalue })
  }
  const handleCartBtn = (value) => {
    setCemValue([...cemvalue , value])
    let UpdateCart=[...cemvalue , value]
    console.log("UpdateCart===>",UpdateCart)
      dispatch(addtocartaction(UpdateCart))
    setCartNo(cartNo + 1);
     toast.success("Added to cart succesfully !", {
      position: toast.POSITION.TOP_CENTER
    });
    
  };
   return (
     <>
    <div className="top-searchbar">
      <input
        size="80"
        onChange={inputHandler}
        type="text"
        placeholder="Search..."
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
      <button  classname='btn-btn-primary' onClick={cartbtnfun}>
        <div className="add_to_cart_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bag-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            />
          </svg>
        </div>
      </button>
    </div>
    <div>  
      <div className="row">
        {searchData?.results?.map((value) => (
          <div className="col-xl-2">
            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-img-top"
                src={value.product_img}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{value.price}</h5>
                <h5 class="card-text">{value.product_name}</h5>
                <div className="item-button">
                  <a href={value.product_link} target="blank">
                    <b>More Info</b>
                  </a>
                  <button
                    onClick={() => {
                      handleCartBtn(value);
                    }}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {cemvalue&& <AddToCart />} */}
      
    </div>
    // {/* <div>
    //   <AddToCart />
    // </div> */}
    // </>
  );
}

export default TopSearchBar;
