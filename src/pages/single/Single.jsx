import React from "react";
import "./Single.css";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productApi";
import { useParams } from "react-router-dom";
import { useGetDeteilProductQuery } from "../../context/productApi";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeart } from "../../context/heartSlice";
import rate from "../../assets/rate.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import shoesingle from "../../assets/shoesingle.png";
import line from "../../assets/line.png";
import twittersingle from "../../assets/twittersingle.png";
import facebooksingle from "../../assets/facebooksingle.png";
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
import color3 from "../../assets/color3.png";
import color4 from "../../assets/color4.png";
import { addToCart } from "../../context/cartSlice";
import { BsCartCheckFill } from "react-icons/bs";
function Single() {
  let { id } = useParams();
  let { data } = useGetProductsQuery();
  let { data: dataDetail, isLoading } = useGetDeteilProductQuery(id);
  let Cart = useSelector((state) => state.cart.value);
  let wishList = useSelector((state) => state.heart.value);
  let dispatch = useDispatch();
  return (
    <>
      <div className="c">
        <p>
          <b>Home</b> / <b>Hot Deal </b>/ Nike Airmax 270 React
        </p>
      </div>
      <div className="container">
        <div className="g">
          <div className={isLoading ? "loading" : "hide"}>
            <div>
              <div className="load1"></div>
              <div className="load2">
                <div className="load3"></div>
                <div className="load3"></div>
                <div className="load3"></div>
                <div className="load3"></div>
              </div>
            </div>
            <div>
              <div className="load4"></div>
              <div className="load5"></div>
              <div className="load6"></div>
              <div className="load7"></div>
              <div className="load5"></div>
            </div>
          </div>
          <div>
            <img id="g20" src={dataDetail?.image} alt="" />
            <div className="g1">
              <img src={dataDetail?.image} alt="" />
              <img src={dataDetail?.image} alt="" />
              <img src={dataDetail?.image} alt="" />
              <img src={dataDetail?.image} alt="" />
            </div>
          </div>
          <div className="g2">
            <h1>{dataDetail?.title}</h1>
            <div className="g3">
              <img src={rate} alt="" />
              <p>{dataDetail?.rating?.count} reviews</p>
              <span>Submit a review</span>
            </div>
            <div className="g4">
              <p>${dataDetail?.price - 2}</p>
              <h4>${dataDetail?.price}</h4>
              <span>24% Off</span>
            </div>
            <div className="g5">
              <p>Availability:</p>
              <p>In stock</p>
            </div>
            <div className="g5">
              <p>Category:</p>
              <p>{dataDetail?.category}</p>
            </div>
            <h2>Free shipping</h2>
            <div className="g6">
              <p>Select Color:</p>
              <div className="g7">
                <img src={color1} alt="" />
                <img src={color2} alt="" />
                <img src={color3} alt="" />
                <img src={color4} alt="" />
              </div>
            </div>
            <div className="g8">
              <p>Size</p>
              <select name="" id="">
                <option value="XS">XS</option>
              </select>
            </div>
            <div className="g9">
              <div className="g10">
                <p>-</p>
                <h4>1</h4>
                <p>+</p>
              </div>
              <div className="g11">
                <button onClick={() => dispatch(addToCart(dataDetail))}>
                  {Cart?.some((item) => item.id === dataDetail?.id) ? (
                    <BsCartCheckFill />
                  ) : (
                    <MdOutlineShoppingCart />
                  )}
                  Add To Cart
                </button>
                <button onClick={() => dispatch(toggleHeart(dataDetail))}>
                  {wishList?.some((item) => item.id === dataDetail?.id) ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>
            <div className="g12">
              <button style={{ background: "rgb(56, 92, 142)" }}>
                <img src={facebooksingle} alt="" />
                Share on Facebook
              </button>
              <button style={{ background: "rgb(3, 169, 244)" }}>
                <img src={twittersingle} alt="" />
                Share on Twitter
              </button>
            </div>
          </div>
          <div className="g13">
            <p>BEST SELLER</p>
            <div className="g14">
              <img style={{ marginBottom: "52px" }} src={shoesingle} alt="" />
              <img src={rate} alt="" />
              <div className="g15">
                <h4>$499</h4>
                <span>$599</span>
              </div>
            </div>
            <img
              style={{ marginLeft: "70px", marginTop: "21px" }}
              src={line}
              alt=""
            />
          </div>
        </div>
        <div className="g16">
          <div className="g17">
            <p>Product Infomation</p>
            <p>Reviews</p>
            <p>Another tab</p>
          </div>
          <h4>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </h4>
          <br />
          <br />
          <h4>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </h4>
          <br />
          <br />
          <h4>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </h4>
        </div>
        <div className="g18">
          <h1>RELATED PRODUCTS</h1>
        </div>
      </div>
      <Product data={data?.slice(0, 4)} title={"none"} loading={isLoading} />
    </>
  );
}

export default Single;
