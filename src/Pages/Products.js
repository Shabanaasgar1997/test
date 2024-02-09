import React from "react";
import { PRODUCTS } from "../Components/ProductsDetails";

function Products() {
  return (
    <>
      <div className="container">
        <div>
          <h1>HEY THIS IS PRODUCTS PAGE</h1>
        </div>
        <div className="row">
          {PRODUCTS.map((productitem) => {
            return (
              <>
                <div className="col-lg-4">
                  <div class="card">
                    <img
                      src=""
                      class="card-img-top img-fluid w-50 d-flex mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{productitem.title}</h5>
                      <p class="card-text">{productitem.designation}</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
