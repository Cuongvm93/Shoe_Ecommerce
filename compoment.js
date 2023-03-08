const compoment={

}
compoment.register=` <div class="register-container">
<form id="form-container">
    <input type="text" placeholder="UserName" name="userName"><br>
    <div id="user-error" class="error"></div>
    <input type="text" name="email" placeholder="Email"><br>
    <div id="email-error" class="error"></div>
    <input type="text" name="password" placeholder="Password"><br>
    <div id="password-error" class="error"></div>
    <input type="text" name="confirmPassword" placeholder="Confirm Password">
    <div id="confirm-error" class="error"></div>
    <input type="file" name=file placeholder="Profile Image">
    <p>Bạn đã có tài khoản? <a id="login">Login</a></p>
    <button type="submit">Submit</button>
</form>

</div>
`
compoment.login=`
<div class="login-container">
<form id="form-container">
    <input type="text" name="email" placeholder="Email"><br>
    <div id="email-error" class="error"></div>
    <input type="text" name="password" placeholder="Password"><br>
    <div id="password-error" class="error"></div>
    <p>Bạn chưa có tài khoản? <a id="register">Register</a></p>
    <button type="submit">Submit</button>
</form>

</div>
`
// compoment.homepage=`
// <div class="header-container">
//   <div class="product-container">
//     <button class="product-container__button">Home</button>
//     <button class="product-container__button">Nike</button>
//     <button class="product-container__button">Adidas</button>
//     <button class="product-container__button">NB</button>
//     <button class="product-container__button">Puma</button>
//   </div>
//   <div class="user-container">
//     <button>Sign in</button>
//     <button>Register</button>
//   </div>
// </div>

// `
// compoment.homenotlogin=`
// <div class="header-container">
//   <div class="product-container">
//     <button class="product-container__button">Home</button>
//     <button class="product-container__button">Nike</button>
//     <button class="product-container__button">Adidas</button>
//     <button class="product-container__button">NB</button>
//     <button class="product-container__button">Puma</button>
//   </div>
//   <div class="user-container">
//   <button class="btn btn-primary" type="submit">Button</button>
//   </div>
// </div>
// <div class="main-container">
// <div class="sort-container">
// <button type="button" class="collapsible">Price Range</button>
// <div class="sort-container-price">
// <div>
//     <label for="sort-container-price__input-from">From</label><br>
//     <input type="number" class="inputSortPrice" id="sort-container-price__input-from">
// </div>
// <div>
//     <label for="sort-container-price__input-to">To</label><br>
//     <input type="number" class="inputSortPrice" id="sort-container-price__input-to">
// </div>
// </div>
// <button type="button" class="collapsible">Brand</button>
// <div class="sort-container-brand">
//     <input type="checkbox" class="inputSortBrand" id="checkboxAdidas" name="adidas" value="Adidas" >
//     <label for="">Adidas</label><br>
//     <input type="checkbox" class="inputSortBrand" id="checkboxNike" name="nike" value="Nike" >
//     <label for="">Nike</label><br>
//     <input type="checkbox" class="inputSortBrand" id="checkboxPuma" name="puma" value="Puma">
//     <label for="">Puma</label><br>
//     <input type="checkbox" class="inputSortBrand" id="checkboxNb" name="nb" value="NB">
//     <label for="">Nb</label>
// </div>
// <button type="button" class="collapsible">Caterogy</button>
// <div class="sort-container-caterogy">
//     <input type="checkbox" class="inputSortCate" id="checkboxShoes"name="Shoes" value="Shoes" >
//     <label for="">Shoes</label><br>
//     <input type="checkbox" class="inputSortCate" id="checkboxClothes" name="clothes" value="clothes" >
//     <label for="">Clothes</label><br>
//     <input type="checkbox" class="inputSortCate" id="checkboxAcessories"name="acessories" value="acessories">
//     <label for="">Accessories</label><br>
// </div>
// <div class="sort-container-button">
//     <button class="sort">Sort</button>
//     <button class="reset">Reset</button>
// </div>
// </div>
// <div class="content-container">
// </div>
// </div>
// <div class="preview-container">
 
// </div>
// <div class="overlay">

// </div>
// `
compoment.wellcome=`
<div class="header-container">
  <div class="product-container">
    <button class="product-container__button">Home</button>
    <button class="product-container__button">Nike</button>
    <button class="product-container__button">Adidas</button>
    <button class="product-container__button">NB</button>
    <button class="product-container__button">Puma</button>
  </div>
  <div class="user-container">
       <i class="fa-solid fa-message"></i>
       <i class="fa-solid fa-cart-shopping"></i>
       <div class="cart-after">0</div>
       <img id="userPhoto" src="https://i.ibb.co/ZK31N3X/istockphoto-1340642632-170667a.jpg">
       <div class="dropdown_Profile">
        <ul>
        <li class="proFileBtn">Profile</li>
        <li class="signOutBtn">Sign Out</li>
        </li>
        </ul>
       </div>
</div>
  </div>
</div>
<div class="main-container">
<div class="sort-container">
<button type="button" class="collapsible">Price Range</button>
<div class="sort-container-price">
<div>
    <label for="sort-container-price__input-from">From</label><br>
    <input type="number" class="inputSortPrice" id="sort-container-price__input-from">
</div>
<div>
    <label for="sort-container-price__input-to">To</label><br>
    <input type="number" class="inputSortPrice" id="sort-container-price__input-to">
</div>
</div>
<button type="button" class="collapsible">Brand</button>
<div class="sort-container-brand">
    <input type="checkbox" class="inputSortBrand" id="checkboxAdidas" name="adidas" value="Adidas" >
    <label for="">Adidas</label><br>
    <input type="checkbox" class="inputSortBrand" id="checkboxNike" name="nike" value="Nike" >
    <label for="">Nike</label><br>
    <input type="checkbox" class="inputSortBrand" id="checkboxPuma" name="puma" value="Puma">
    <label for="">Puma</label><br>
    <input type="checkbox" class="inputSortBrand" id="checkboxNb" name="nb" value="NB">
    <label for="">Nb</label>
</div>
<button type="button" class="collapsible">Caterogy</button>
<div class="sort-container-caterogy">
    <input type="checkbox" class="inputSortCate" id="checkboxShoes"name="Shoes" value="Shoes" >
    <label for="">Shoes</label><br>
    <input type="checkbox" class="inputSortCate" id="checkboxClothes" name="clothes" value="clothes" >
    <label for="">Clothes</label><br>
    <input type="checkbox" class="inputSortCate" id="checkboxAcessories"name="acessories" value="acessories">
    <label for="">Accessories</label><br>
</div>
<div class="sort-container-button">
    <button class="sort">Sort</button>
    <button class="reset">Reset</button>
</div>
</div>
<div class="content-container">
</div>
</div>
<div class="preview-container">
 
</div>
<div class="overlay">

</div>
`
compoment.oppsFound=`
<div class="content-container">
<div class="oppsFound">
<img src="../Image/no-products.svg" alt="">
<h3>Oops...no Products found.</h3><br>
<p>Try changing the filters or search for a different item.</p>
</div>
`
compoment.inCart=`
<div class="header-container">
  <div class="product-container">
    <button class="product-container__button">Home</button>
    <button class="product-container__button">Nike</button>
    <button class="product-container__button">Adidas</button>
    <button class="product-container__button">NB</button>
    <button class="product-container__button">Puma</button>
  </div>
  <div class="user-container">
       <i class="fa-solid fa-message"></i>
       <i class="fa-solid fa-cart-shopping"></i>
       <div class="cart-after">0</div>
       <img id="userPhoto" src="https://i.ibb.co/ZK31N3X/istockphoto-1340642632-170667a.jpg">
       
  </div>
</div>
  <div class="main-container">
  <div class="inCart-container">
  </div>
  <div class="totalDetail-container">
  <div class="summary">
      <div class="order-sum">
        <h2 style="font-weight:bold; border-bottom:1px solid silver ">Order Summary</h2>
      </div>
      <div class="details">
        <p style="font-size: 16px;color:silver ">Subtotal</p>
        <p style="font-size: 16px;color:silver; ">Discount</p>
        <p style="font-size: 16px;color:silver ">Delivery Fee</p>
        <p style="font-size: 20px;font-weight:bold; ">Grand Total</p>
        <p id="subtotal" style="right:0px;top:0px;position: absolute"></p>
        <p id="discount" style="right:0px;top:35px;position: absolute"></p>
        <p id="fee" style="right:0px;position: absolute; top:67px"></p>
        <p id="total" style="right: 0px;position: absolute; top:102px;font-size: 20px; font-weight: 500;"></p>
      </div>
      <div class="Button-buy">
        <button style="background-color: rgb(34, 175, 235); " onclick="checkoutfromcart()">Check Out</button>
        <button onclick="continueShopping()">Continue Shopping</button>
      </div>
    </div>
  </div>
  </div>
  `
compoment.info=`
<div class="info">
        <div class="title">
         <h3>Fill your infomation</h3>
        </div>
        <div class="detail">
        <div class="div1">
            <div class="fullnameorder">
                <p>Full Name</p>
                <input type="text" placeholder="Enter name" class="inp" required>
            </div>
            <div class="number">
                <p> Mobile number</p>
                
                    <input class="inp" type="number" placeholder="tel" required  pattern="/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g">
                    <p id="errortel " style="color:red;font-size: 10px; font-style: italic;display: none;">Tel Number is incorect</p>
                    
                
            </div>
        </div>
        <div class="div1">
            <div class="street">
                <p>Adress</p>
                <input class="inp" type="text" placeholder="Adresss" required >
            </div>
            <div class="state">
                <p>State</p>
                <select class="inp" type="text" id="state" required></select>
            </div>
        </div>
        <div class="div1">
            <div class="city">
                <p>City</p>
                <select class="inp" type="text" id="distric" required></select>
            </div>
            <div class="zipcode">
                <p>Zip Code</p>
                <input class="inp"  type="number" placeholder="Zip code" required >
            </div>
        </div>
        </div>
      </div>
`
compoment.payment=`
<div class="payment">
        <div class="paytitle">
            <h3>Select payment method</h3>
        </div>
        <div class="payoption">
            <img src="./image/paypal.png" alt="">
            <img src="./image/visa.png" alt="">
            <img src="./image/apple-pay.png" alt="">
        </div>
      </div>
`
compoment.sumary=`
<div class="sumary">
        <div class="order-sum">
            <h3>Order Summary</h3>
        </div>
        <div class="product-list" id="product-list">
           
        </div>
        <div class="order-detail">
            <div class="detail-title">
                <h3>Order detail</h3>
            </div>
            <div class="price-list" id="price-list">
               
            </div>
        </div>
    </div>
    <button class="purchase" >Purchase</button>  
`
compoment.chatContainer=`
<div class="chat-container">
    <div class="chat-container-header">
        <p id="chat-container-header"></p>
    </div>
    <div class="chat-body-container" id="chat-body-container">
        <div class="chat-me" id="chat-me">
           
        </div>
        <div class="chat-owner">
            
        </div>
    </div>
    <form class="chat-input-container" id="input-container">
        <input type="text" name="input">
        <button type="submit">Send</button>
    </form>

    <div class="container-userList" id="container-userList">


    </div>
</div>  
`