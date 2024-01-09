import './cart.css';
import Header from './header';

const Cart = ({ id, name, price, }) => {

  return (
    <>
        <Header />

      <div class="cart">
        <div className="item">
          <div id="header">
            <ul>
              <span>
                <a class="header1" href="#">Image</a>
              </span>
              <span>
                <a class="header1 " href="#">Product</a>
              </span>
              <span>
                <a class=" header1" href="#">Quantity</a>
              </span>
              <span>
                <a class=" header1" href="#">Price</a>
              </span>
              <span>
                <a class="header1" href="#">Remove</a>
              </span>
            </ul>
          </div>
        </div>

        <div class="product">
          <img src="/image/macbook.png" alt="Product 1" />
          <h2>macbook</h2>
          <div class="quantity">
            <label for="quantity1">       Quantity:</label>
            <input type="number" id="quantity1" name="quantity1" value="1" />
          </div>
          <div class="price">
            price: 235000
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>


        </div>

        <div class="product">
          <img src="/image/smartwatch.png" alt="Product 1" />
          <h2>Product 1</h2>
          <div class="quantity">
            <label for="quantity1">Quantity:</label>
            <input type="number" id="quantity1" name="quantity1" value="1" />
          </div>
          <div class="price">
            price:135000ugx
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>


        </div>
        <div class="product">
          <img src="/image/phone.png" alt="Product 1" />
          <h2>phone</h2>
          <div class="quantity">
            <label for="quantity1">Quantity:</label>
            <input type="number" id="quantity1" name="quantity1" value="1" />
          </div>
          <div class="price">
            price: 335000ugx
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
        </div>


        <div class="product">
          <img src="/image/cattle.png" alt="Product 1" />
          <h2>Cattle</h2>
          <div class="quantity">
            <label for="quantity1">Quantity:</label>
            <input type="number" id="quantity1" name="quantity1" value="1" />
          </div>
          <div class="price">
            price: 5000ugx
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
        </div>


        <div class="product">
          <img src="/image/headphone.png" alt="Product 2" />
          <h2>Headphone</h2>
          <div class="quantity">
            <label for="quantity2">Quantity:</label>
            <input type="number" id="quantity2" name="quantity2" value="1" />
          </div>
          <div class="price">price: 15000ugx</div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
        </div>
      </div>
      <div class="product">
        <img src="/image/frock.png" alt="Product 1" />
        <h2>Frock</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 35000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>
      <div class="product">
        <img src="/image/shorty.png" alt="Product 1" />
        <h2>Shorty</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 65000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>
      <div class="product">
        <img src="/image/jeans.png" alt="Product 1" />
        <h2>Jeans</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 35000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>
      <div class="product">
        <img src="/image/suit.png" alt="Product 1" />
        <h2>Suit</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 225000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>
      <div class="product">
        <img src="/image/t shirt.png" alt="Product 1" />
        <h2>T-shirt</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 55000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>
      <div class="product">
        <img src="/image/shoes 3.png" alt="Product 1" />
        <h2>Leather Shoes</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 95150ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      <div class="product">
        <img src="/image/heels1.png" alt="Product 1" />
        <h2>Heels</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 95000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      <div class="product">
        <img src="/image/shoes 2.png" alt="Product 1" />
        <h2>Sneakers</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 125000ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      <div class="product">
        <img src="/image/shoes 2.png" alt="Product 1" />
        <h2>Nick Shoes</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 35050ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      <div class="product">
        <img src="/image/shoes 2.png" alt="Product 1" />
        <h2>Nick Shoes</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 35050ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      <div class="product">
        <img src="/image/shoes 2.png" alt="Product 1" />
        <h2>Nick Shoes</h2>
        <div class="quantity">
          <label for="quantity1">Quantity:</label>
          <input type="number" id="quantity1" name="quantity1" value="1" />
        </div>
        <div class="price">
          price: 35050ugx
        </div>
        <div class="product-removal">
          <button class="remove-product">Remove</button>
        </div>
      </div>

      v



    </>
  )
}
export default Cart