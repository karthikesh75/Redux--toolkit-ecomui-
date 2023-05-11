import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import image1 from "../../Assets/wallpaper1.jpg";
import image2 from "../../Assets/wallpaper2.jpg";
import image3 from "../../Assets/wallpaper3.jpg";
import image4 from "../../Assets/wallpaper4.jpg";
import image5 from "../../Assets/wallpaper5.jpg";
import { cemvalueSelector } from "../../redux/CounterSlice";
import "../rightbar/AddToCart.css";

function AddToCart() {
  const location = useLocation();
  const { cemvalue } = useSelector(cemvalueSelector);
  // let v2=cemvalue
//  const d1 = v2.length>=1 && v2?.map((val)=>(val?.id))
//   const d2 =[...new Set(d1)]
//   console.log("d1==>",d1);
if(cemvalue){
  console.log('hii');
  for(let i =0;i<=cemvalue.length;i++){
    const cemid = cemvalue[i]
    console.log("cemid==>",cemid); 
  }
}else{
  console.log('hello');
}

// const filterid =   cemvalue.map((val)=> val.id) 
// const filteridDuplicates = [...new Set(filterid)]
// console.log("filteridDuplicates==>",filteridDuplicates);
// console.log("filterid==>",filterid);
// console.log("cemvalue",cemvalue.length);
  console.log("cemvalue.length===>",cemvalue);
  return (
    <div className="top_images" style={{ height: "50%" }}>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h3>My Cart Items...</h3>
       {cemvalue?.length >= 1 ? (
        cemvalue?.map((value) => {
          return (
            <div class="card" style={{ width: "30rem" }}>
              <div class="card-body">
                <img
                  class="card-img-top"
                  src={value.product_img}
                  alt="Card image cap"
                />
                <h5 class="card-title">{value.price}</h5>
                <p class="card-text">
                  <b>{value.product_name}</b>
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>{value.product_cat}</b>
                </li>
              </ul>
              <div class="card-body">
                <a
                  href={`${value.product_link}`}
                  target="blank"
                  class="card-link"
                >
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <h3>{"Your Cart Is Empty"}</h3>
      )}
    </div>
  );
}

export default AddToCart;
