import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ProductCard.css';

const ProductCard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="image-container">
              <div className="first">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="discount">-25%</span>
                  <span className="wishlist"><i style={{ color: 'red' }} className="fa fa-heart"></i></span>
                </div>
              </div>
              <img src="https://i.ibb.co/ZMYtFcR/20s-Costume-Arthur-with-Flat-Cap.jpg" className="img-fluid rounded thumbnail-image" alt="Product" />
            </div>
            <div className="product-detail-container p-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dress-name">20s Costume Arthur with Flat Cap</h5>
                <div className="d-flex flex-column mb-2">
                  <span className="new-price">$50.99</span>
                  <small className="old-price text-right">$60.99</small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div className="color-select d-flex">
                  <input type="button" name="grey" className="btn creme" />
                  <input type="button" name="red" className="btn red ml-2" />
                  <input type="button" name="blue" className="btn blue ml-2" />
                </div>
                <div className="d-flex">
                  <span className="item-size mr-2 btn" type="button">S</span>
                  <span className="item-size mr-2 btn" type="button">M</span>
                  <span className="item-size btn" type="button">L</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i className="fa fa-star-o rating-star"></i>
                  <span className="rating-number">4.8</span>
                </div>
                <span className="buy">BUY +</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="card voutchers">
              <div className="voutcher-divider">
                <div className="voutcher-left text-center">
                  <span className="voutcher-name">Monday Happy</span>
                  <h5 className="voutcher-code">#MONHPY</h5>
                </div>
                <div className="voutcher-right text-center border-left">
                  <h5 className="discount-percent">20%</h5>
                  <span className="off">Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="col-md-3">
          <div className="card">
            <div className="image-container">
              <div className="first">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="discount">-25%</span>
                  <span className="wishlist"><i style={{ color: 'red' }} className="fa fa-heart"></i></span>
                </div>
              </div>
              <img src="https://i.ibb.co/TrYTS3g/Casino-Playing-Cards-Dress.jpg" className="img-fluid rounded thumbnail-image" alt="Product" />
            </div>
            <div className="product-detail-container p-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dress-name">Casino Playing Cards Dress</h5>
                <div className="d-flex flex-column mb-2">
                  <span className="new-price">$29.99</span>
                  <small className="old-price text-right">$34.99</small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div className="color-select d-flex">
                  <input type="button" name="grey" className="btn creme" />
                  <input type="button" name="red" className="btn red ml-2" />
                  <input type="button" name="blue" className="btn blue ml-2" />
                </div>
                <div className="d-flex">
                  <span className="item-size mr-2 btn" type="button">S</span>
                  <span className="item-size mr-2 btn" type="button">M</span>
                  <span className="item-size btn" type="button">L</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i className="fa fa-star-o rating-star"></i>
                  <span className="rating-number">4.8</span>
                </div>
                <span className="buy">BUY +</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="card voutchers">
              <div className="voutcher-divider">
                <div className="voutcher-left text-center">
                  <span className="voutcher-name">Monday Happy</span>
                  <h5 className="voutcher-code">#MONHPY</h5>
                </div>
                <div className="voutcher-right text-center border-left">
                  <h5 className="discount-percent">20%</h5>
                  <span className="off">Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <div className="image-container">
              <div className="first">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="discount">-25%</span>
                  <span className="wishlist"><i style={{ color: 'red' }} className="fa fa-heart"></i></span>
                </div>
              </div>
              <img src="https://i.ibb.co/tCZKDpz/70s-Disco-Dress-Silver-Star.jpg" className="img-fluid rounded thumbnail-image" alt="Product" />
            </div>
            <div className="product-detail-container p-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dress-name">70s Disco Dress Silver Star</h5>
                <div className="d-flex flex-column mb-2">
                  <span className="new-price">$35.99</span>
                  <small className="old-price text-right">$40.99</small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div className="color-select d-flex">
                  <input type="button" name="grey" className="btn creme" />
                  <input type="button" name="red" className="btn red ml-2" />
                  <input type="button" name="blue" className="btn blue ml-2" />
                </div>
                <div className="d-flex">
                  <span className="item-size mr-2 btn" type="button">S</span>
                  <span className="item-size mr-2 btn" type="button">M</span>
                  <span className="item-size btn" type="button">L</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i className="fa fa-star-o rating-star"></i>
                  <span className="rating-number">4.8</span>
                </div>
                <span className="buy">BUY +</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="card voutchers">
              <div className="voutcher-divider">
                <div className="voutcher-left text-center">
                  <span className="voutcher-name">Monday Happy</span>
                  <h5 className="voutcher-code">#MONHPY</h5>
                </div>
                <div className="voutcher-right text-center border-left">
                  <h5 className="discount-percent">20%</h5>
                  <span className="off">Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <div className="image-container">
              <div className="first">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="discount">-25%</span>
                  <span className="wishlist"><i style={{ color: 'red' }} className="fa fa-heart"></i></span>
                </div>
              </div>
              <img src="https://i.ibb.co/2dv8rBy/Deluxe-Trenchcoat-for-Men.jpg" className="img-fluid rounded thumbnail-image" alt="Product" />
            </div>
            <div className="product-detail-container p-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dress-name">Deluxe Trenchcoat for Men</h5>
                <div className="d-flex flex-column mb-2">
                  <span className="new-price">$65.99</span>
                  <small className="old-price text-right">$69.99</small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div className="color-select d-flex">
                  <input type="button" name="grey" className="btn creme" />
                  <input type="button" name="red" className="btn red ml-2" />
                  <input type="button" name="blue" className="btn blue ml-2" />
                </div>
                <div className="d-flex">
                  <span className="item-size mr-2 btn" type="button">S</span>
                  <span className="item-size mr-2 btn" type="button">M</span>
                  <span className="item-size btn" type="button">L</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i className="fa fa-star-o rating-star"></i>
                  <span className="rating-number">4.8</span>
                </div>
                <span className="buy">BUY +</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="card voutchers">
              <div className="voutcher-divider">
                <div className="voutcher-left text-center">
                  <span className="voutcher-name">Monday Happy</span>
                  <h5 className="voutcher-code">#MONHPY</h5>
                </div>
                <div className="voutcher-right text-center border-left">
                  <h5 className="discount-percent">20%</h5>
                  <span className="off">Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductCard;

