import React from "react";
import "./menu.css";
import teapour from "../../resources/tea-pour.jpg";

const Menu = () => {
  return (
    <div>
      <div className="all-products">
        <section className="menu-border">
          <article className="product">
            <div className="image-wrapper">
              <img id="product-img" src={teapour} alt="bubble tea" />
            </div>
            <div className="tea-info">
              <h1 className="tea-name">Classic | Milk Tea</h1>
              <p className="tea-description">
                Lactose-free milk, handcrafted brown sugar syrup, and black tea
              </p>
            </div>
          </article>

          <article className="product">
            <div className="image-wrapper">
              <img id="product-img" src={teapour} alt="bubble tea" />
            </div>
            <div className="tea-info">
              <h1 className="tea-name">Best Friend | Green Milk Tea</h1>
              <p className="tea-description">
                Lactose-free milk, handcrafted brown sugar syrup, and green tea
              </p>
            </div>
          </article>

          <article className="product">
            <div className="image-wrapper">
              <img id="product-img" src={teapour} alt="bubble tea" />
            </div>

            <div className="tea-info">
              <h1 className="tea-name">Thai Tea</h1>
              <p className="tea-description">
                Handcrafted simple syrup, loose-leaf thai tea, and lactose free
                milk
              </p>
            </div>
          </article>

          <article className="product">
            <div className="image-wrapper">
              <img id="product-img" src={teapour} alt="bubble tea" />
            </div>

            <div className="tea-info">
              <h1 className="tea-name">
                Pineberry | Pineapple + Strawberry Green Tea
              </h1>
              <p className="tea-description">
                A thirst quenching blend of handcrafted pineapple and strawberry
                syrup with green tea
              </p>
            </div>
          </article>

          <article className="product">
            <div className="image-wrapper">
              <img id="product-img" src={teapour} alt="bubble tea" />
            </div>

            <div className="tea-info">
              <h1 className="tea-name">Piglet</h1>
              <p className="tea-description">
                Ice cold coconut milk blended with our handcrafted strawberry
                syrup
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Menu;
