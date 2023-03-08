const view = {};
//view chat message

view.chatMessage = (mess) => {
  console.log(auth.currentUser.email);
  let createElement = "";
  if (mess) {
    if (auth.currentUser.email != "cuongvu6693@gmail.com") {
      console.log(112313123);
      for (let i = 0; i < mess.length; i++) {
        if (mess[i].owner == auth.currentUser.email) {
          createElement += `       
        <div class="container-message" id="chat-me">
        me          
        <div class="content">
        ${mess[i].content}           
        </div>
        </div>
        `;
        } else {
          createElement += `                       
        <div class="container-message" id="chat-owner">
        Admin           
        <div class="content">
        ${mess[i].content}          
        </div>
        </div>
        `;
        }
      }
    } else {
      console.log(1231312313);
      for (let i = 0; i < mess.length; i++) {
        if (mess[i].owner == auth.currentUser.email) {
          createElement += `       
        <div class="container-message" id="chat-me">
        me          
        <div class="content">
        ${mess[i].content}           
        </div>
        </div>
        `;
        } else {
          createElement += `                       
        <div class="container-message" id="chat-owner">
        Guest           
        <div class="content">
        ${mess[i].content}          
        </div>
        </div>
        `;
        }
      }
    }
  }
  document.getElementById("chat-body-container").innerHTML = createElement;
};

let dataUser = "";
let photUrl = "";
view.dataUser = (dataUser1, dataUse2) => {
  dataUser = dataUser1;
  photUrl = dataUse2;
  console.log("load anh", dataUse2);
};
// view screen session
view.setscreenActive = function (page) {
  if (page == "register") {
    document.getElementById("app").innerHTML = compoment.register;
    let dataUser = document.getElementById("form-container");
    const data = {};

    dataUser.addEventListener("submit", (e) => {
      e.preventDefault();
      data.userName = dataUser.userName.value;
      data.email = dataUser.email.value;
      data.password = dataUser.password.value;
      data.confirmPassword = dataUser.confirmPassword.value;
      data.file = dataUser.file.files[0];

      controller.register(data);
      console.log("77777", data.file);
    });
    view.getError = (id, content) => {
      return (document.getElementById(id).innerHTML = content);
    };
    view.checkEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return email.match(re);
    };
    view.checkPass = (pass) => {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return pass.match(re);
    };
    let directLogin = document.getElementById("login");
    directLogin.addEventListener("click", () => {
      view.setscreenActive("login");
    });
  }
  if (page == "login") {
    document.getElementById("app").innerHTML = compoment.login;
    let directRegister = document.getElementById("register");
    directRegister.addEventListener("click", () => {
      view.setscreenActive("register");
    });
    let a = document.getElementById("form-container");
    a.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        email: a.email.value,
        password: a.password.value,
      };
      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerHTML = content;
      };
      controller.login(data);
      //    model.login(data)
    });
  }
  if (page == "wellcome") {
    console.log("Login", 11111);
    //login
    document.getElementById("app").innerHTML =
      compoment.wellcome + compoment.chatContainer;
    //Sign Out
    document.querySelector(".signOutBtn").addEventListener("click", () => {
      model.signOut();
    });
    // Push Message and view
    if (auth.currentUser != null) {
      if (auth.currentUser.email != "cuongvu6693@gmail.com") {
        console.log("Hello world");
        document.getElementById("chat-container-header").innerHTML="Admin"
        document.getElementById("container-userList").style.display="none"
        view.pushMessage(auth.currentUser.email);
      }
    }
    if (photUrl != "") {
      document
        .getElementById("userPhoto")
        .setAttribute("src", auth.currentUser.photUrl);
    }
    document.getElementById("userPhoto").addEventListener("click", () => {
      console.log(111);
      document
        .querySelector(".dropdown_Profile")
        .classList.toggle("dropdown_Profile_active");
    });
    let login = document.querySelector(".btn-primary");
    console.log(login);
    console.log("chạy wellcome");
    let button = document.querySelectorAll(".product-container__button");
    console.log(button);
    button.forEach((element) => {
      element.onclick = () => {
        model.loadProduct(element.innerHTML);
      };
    });
    // view chatbox
    document.querySelector(".fa-message").onclick = () => {
      document
        .querySelector(".chat-container")
        .classList.toggle("active-chatContainer");
      model.getMessage();
    };
    //Click User in ListChat Bar-Only for Admin

    // view Product
    view.product = (data) => {
      let content = document.querySelector(".content-container");
      if (data.length == 0) {
        content.innerHTML = compoment.oppsFound;
      } else {
        console.log(88888);
        content.innerHTML = "";
        for (let index = 0; index < data.length; index++) {
          content.innerHTML += `
        <div class="card" id="${data[index].id}">
          <img src="${data[index].img1}" alt="">
          <div class="card-name">${data[index].name}</div>
          <p class="price">$${data[index].price}</p>
          <div class="card-button">
              <button class="card-button-atc"><i class="fa-solid fa-cart-shopping"></i></button>
            <button class="card-button-preview">Preview</button>
          </div>
        </div> 
              `;
        }
      }

      // addtocart button
      let btnAtc = document.querySelectorAll(".card-button-atc");
      console.log(btnAtc);
      let listItem = document.querySelector(".cart-container_list");
      btnAtc.forEach((item, index) => {
        item.onclick = () => {
          if (firebase.auth().currentUser) {
            model.addToCart(data[index]);
            ShowSuccessToast("Add to Cart Success!");
          } else {
            ShowErrorToast("You must login first");
            view.setscreenActive("login");
          }
        };
      });
      // preview Button
      console.log(999999);
      let btn_preview = document.querySelectorAll(".card-button-preview");
      console.log(btn_preview);
      let preview_container = document.querySelector(".preview-container");
      let overlay = document.querySelector(".overlay");
      btn_preview.forEach((item, index) => {
        item.onclick = () => {
          //fill full detail info into preview container
          document.querySelector(".preview-container").innerHTML = `
  <div class="preview-container_header">
  <div class="preview-container_header--image" >
   <img class="preview-img" src="${data[index].img1}">
  </div>
   <h4>${data[index].name}</h4>
   <p>PRICE: ${data[index].price}$</p>
   <ul class="preview-container_header-ul">
    <li><img src="${data[index].img2}" alt=""></li>
    <li><img src="${data[index].img3}" alt=""></li>
    <li><img src="${data[index].img4}" alt=""></li>
    <li><img src="${data[index].img1}" alt=""></li>
   </ul>
   <h4 class=".preview-container_header-des-h4"><i>Description</i></h4>
   <div class="preview-container_header-des">
    <p>${data[index].des}</p>

   </div>
 </div>
 <div class="preview-container-footer">
  <button>Add to cart</button>
 </div>
        `;
          // Onclick small image
          const preImg = document.getElementsByClassName("preview-img")[0];
          const listImg = document.getElementsByTagName("li");
          console.log(listImg);
          for (let index = 0; index < listImg.length; index++) {
            listImg[index].onclick = () => {
              for (let index = 0; index < listImg.length; index++) {
                listImg[index].classList.remove("activeli");
              }
              listImg[index].classList.add("activeli");
              preImg.setAttribute("src", listImg[index].children[0].currentSrc);
              console.log(preImg.currentSrc);
              console.log(listImg[index].children[0].currentSrc);
            };
          }

          console.log(listImg);
          // Display preview container
          preview_container.classList.toggle("active");
          overlay.classList.toggle("rewidth");

          overlay.onclick = () => {
            preview_container.classList.remove("active");
            overlay.classList.remove("rewidth");
          };
        };
      });
    };
    // view index in cart icon
    view.indexOfCartIcon = (data) => {
      let a = document.querySelector(".cart-after");
      if (a) {
        document.querySelector(".cart-after").innerHTML = `${data}`;
      }
    };
    // View list item in cart
    view.listAddtocart = (data) => {
      document.getElementsByClassName(
        "cart-after"
      )[0].innerHTML = `${data.length}`;
      document.querySelector(".cart-container_list").innerHTML = "";
      for (let index = 0; index < data.length; index++) {
        document.querySelector(".cart-container_list").innerHTML += `
      <div class="cart-container_list_item">
      <img src="${data[index].img1}" alt="">
      <h4 class="title">A${data[index].name}</h4>
      <p class="price">${data[index].price} $</p>
      <p class="unit"><i class="fa-solid fa-circle-minus"></i>&ensp;${data[index].num} &ensp;<i class="fa-solid fa-circle-plus"></i></span></p>
      <button class="remove">Remove</button> 
      </div>
      `;
      }
      document.querySelectorAll(".remove").forEach((item) => {
        item.onlick = () => {
          console.log(1231231);
        };
      });
    };
    // collapsible sort container
    let coll = document.getElementsByClassName("collapsible");
    for (let index = 0; index < coll.length; index++) {
      coll[index].onclick = () => {
        coll[index].classList.toggle("activeCollapse");
        var content = coll[index].nextElementSibling;

        console.log(content.style);
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.classList.remove("paddingsortcontent");
        } else {
          content.classList.add("paddingsortcontent");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    }
    let sortButton = document.querySelector(".sort");
    let inputSortPrice = document.querySelectorAll(".inputSortPrice");
    let inputSortBrand = document.querySelectorAll(".inputSortBrand");
    let inputSortCate = document.querySelectorAll(".inputSortCate");
    sortButton.addEventListener("click", () => {
      let arrValueSortPrice = [];
      let arrValueSortBrand = [];
      let arrValueSortCate = [];
      if (inputSortPrice[0].value && inputSortPrice[1].value != "") {
        arrValueSortPrice = [
          +inputSortPrice[0].value,
          +inputSortPrice[1].value,
        ];
      } else if (
        inputSortPrice[0].value == "" &&
        inputSortPrice[1].value != ""
      ) {
        arrValueSortPrice = [0, +inputSortPrice[1].value];
      } else if (
        inputSortPrice[0].value != "" &&
        inputSortPrice[1].value == ""
      ) {
        arrValueSortPrice = [+inputSortPrice[0].value, Infinity];
      } else {
        arrValueSortPrice = [];
      }

      for (let index = 0; index < inputSortBrand.length; index++) {
        if (inputSortBrand[index].checked == true) {
          arrValueSortBrand.push(inputSortBrand[index].value);
        }
      }
      for (let index = 0; index < inputSortCate.length; index++) {
        if (inputSortCate[index].checked == true) {
          arrValueSortCate.push(inputSortCate[index].value);
        }
      }
      console.log(arrValueSortPrice);
      console.log(arrValueSortBrand);
      console.log(arrValueSortCate);
      model.getSortData(arrValueSortPrice, arrValueSortBrand, arrValueSortCate);
    });

    // remove item
    // const btn_remove=document.querySelectorAll(".remove")

    // let wellcome=document.getElementById("wellcome")
    // wellcome.innerHTML="wellcome"+ dataUser
    // let btn=document.getElementsByTagName("button")[1]
    // btn.addEventListener("click",()=>{
    //   let cf=confirm("bạn có muốn thoát trang không")
    //   if (cf==true) {
    //     // view.setScreenActive("registerPage")
    //     firebase.auth().signOut()
    // //     setTimeout(() => {
    // //         console.log(auth.currentUser);
    // //     }, 2000);
    //   }
    // })

    // click cart Button
    let cartButton = document.querySelector(".fa-cart-shopping");
    cartButton.addEventListener("click", () => {
      view.setscreenActive("inCart");
    });
  }
  if (page == "inCart") {
    document.getElementById("app").innerHTML = compoment.inCart;
    // let button = document.querySelectorAll(".product-container__button");
    // console.log(button);
    // button.forEach((element) => {
    //   element.onclick = () => {
    //     view.setscreenActive("wellcome")
    //     model.loadProduct(element.innerHTML);
    //   };
    // });

    model.getInCartData();
    view.inCartcontent = (data) => {
      let inCartcontent =
        document.getElementsByClassName("inCart-container")[0];
      let subTotal = 0;
      let discount = 0;
      let fee = 0;
      let total = 0;
      inCartcontent.innerHTML = "";
      if (data != undefined && data.length != 0) {
        for (let index = 0; index < data.length; index++) {
          inCartcontent.innerHTML += `
        <div class="incart-content">
        <div class="incart-content-detail">
        <img src="${data[index].img1}">
        <div class="incart-content-detail_name">
            <p>${data[index].name}</p>
            <p>$${data[index].price}</p><br>
            <span><i class="fa-solid fa-square-plus"></i> ${data[index].num}  <i class="fa-solid fa-square-minus"></i></span>
        </div>
        </div>
      <div class="incart-remove">
        <i class="fa-solid fa-trash"></i>
      </div>
     </div>
           `;
          subTotal += data[index].price * data[index].num;
        }
        if (subTotal >= 400) {
          discount = subTotal * 0.02;
          fee = 0;
        }
        if (subTotal >= 1000) {
          discount = subTotal * 0.05;
          fee = 5;
        }
        if (subTotal >= 2000) {
          discount = subTotal / 10;
          fee = 20;
        }
        total = subTotal - discount + fee;
        document.getElementById(
          "subtotal"
        ).innerHTML = `$ ${new Intl.NumberFormat("de-DE").format(subTotal)}`;
        document.getElementById(
          "discount"
        ).innerHTML = `$ ${new Intl.NumberFormat("de-DE").format(discount)}`;
        document.getElementById("fee").innerHTML = `$ ${fee}`;
        document.getElementById("total").innerHTML = `$ ${new Intl.NumberFormat(
          "de-DE"
        ).format(total)}`;
        document.getElementsByClassName(
          "cart-after"
        )[0].innerHTML = `${data.length}`;
      } else {
        document.getElementById("subtotal").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("fee").innerHTML = "";
        document.getElementById("total").innerHTML = "";
        document.getElementsByClassName("cart-after")[0].innerHTML = "0";
        inCartcontent.innerHTML = `
      <img src="../Image/cart-empty.svg">
      <p>Your cart is empty.</p>
      <p>Find your favorite products and add them to your cart.</p>
      `;
      }
      // Remove item in Cart
      let trashBtn = document.querySelectorAll(".fa-trash");
      trashBtn.forEach((item, index) => {
        item.onclick = () => {
          data.splice(index, 1);
          console.log(data);
          model.updateCart(data);
        };
      });
      // plus Number unit
      let plusBtn = document.querySelectorAll(".fa-square-plus");
      console.log(plusBtn);

      plusBtn.forEach((item, index) => {
        item.onclick = () => {
          console.log(11112);
          data[index].num++;
          model.updateCart(data);
        };
      });
      // minus Number unit
      let minusBtn = document.querySelectorAll(".fa-square-minus");
      console.log(minusBtn);
      minusBtn.forEach((item, index) => {
        item.onclick = () => {
          data[index].num--;
          if (data[index].num == 0) {
            data.splice(index, 1);
          }
          model.updateCart(data);
        };
      });
      // back to page
      let button = document.querySelectorAll(".product-container__button");
      console.log(button);
      button.forEach((element) => {
        element.onclick = () => {
          view.setscreenActive("wellcome");
          model.loadProduct(element.innerHTML);
          view.indexOfCartIcon(data.length);
        };
      });
      // checkout Page
      checkoutfromcart = () => {
        document.querySelector(".main-container").innerHTML =
          compoment.info + compoment.payment + compoment.sumary;
        let selectPro = document.getElementById("state");
        model.getDataProvince();
        // view provine select
        view.optionProvince = (dataProvince) => {
          for (let i = 0; i < dataProvince.length; i++) {
            selectPro.innerHTML += `
          <option value="${dataProvince[i].name}">${dataProvince[i].name}</option>
          `;
          }
          selectPro.addEventListener("change", () => {
            document.getElementById("distric").innerHTML = "";
            dataProvince.forEach((item) => {
              if (item.name == selectPro.value) {
                for (let i = 0; i < item.districts.length; i++) {
                  document.getElementById("distric").innerHTML += `
              <option value="${item.districts[i].name}">${item.districts[i].name}</option>
              `;
                }
              }
            });
          });
        };
        // purchase function
        document.querySelector(".purchase").addEventListener("click", () => {
          view.setscreenActive("wellcome");
          ShowSuccessToast("Purchase success!");
          model.clearCart();
        });
      };
    };
  }
};

//Toast notification
function toast({ title = "", message = "", type = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration);
    const toast = document.createElement("div");
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      error: "fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];
    //   const delay = (duration / 1000).toFixed(2)
    toast.classList.add("toast", `toast--${type}`);
    //   toast.style.animation =` slideInLeft ease .3s ,fadeout linear 1s ${delay}s forwards`;
    toast.innerHTML = `
      
  <div class="toast__icon">
    <i class="${icon}"></i>
  </div>
  <div class="toast__body">
    <h3 class="toast__title">${title}</h3>
    <p class="toast__msg">${message}</p>
  </div>
  <div class="toast__close">
    <i class="fa-solid fa-xmark"></i>
  </div>

      `;
    main.appendChild(toast);
  }
}

function ShowSuccessToast(message) {
  toast({
    title: "Success",
    message: message,
    type: "success",
    duration: 4000,
  });
}
function ShowErrorToast(message) {
  toast({
    title: "Error",
    message: message,
    type: "error",
    duration: 4000,
  });
}
function ShowInfoToast(message) {
  toast({
    title: "Thông báo",
    message: message,
    type: "info",
    duration: 4000,
  });
}

// Type and send Message
view.pushMessage = (id) => {
  console.log("Test nữa đi");
  model.getkey(id)
  let formChat = document.querySelector(".chat-input-container");
  formChat.addEventListener("submit", (e) => {
    e.preventDefault();
    let datachat = {};
    // if(auth.currentUser.email=="Cuongvu6693@gmail.com")
    // {
    //   datachat={
    //     content:formChat.input.value,
    //     owner:"Admin"
    //   }
    // }else{
    datachat = {
      content: formChat.input.value,
      owner: auth.currentUser.email,
    };
    console.log(id)
    model.pushMessage(datachat);
  });
};

// view User list - only for Admin
view.viewUserList = (email, mess) => {
  let newString = "";
  if (mess.length >= 2) {
    // let listUser = document.getElementById("container-userList")
    // for (let index = 0; index < data.length; index++) {
    //     console.log(auth.currentUser.email);
    //     if (data[index] != auth.currentUser.email) {
    newString = `
            <div class="user1" id="${email}">
            <img src="./Image/apple-pay.png" alt="">
            <p class="email">${email}</p><br>
            <p class="content-chatWaiting">${mess[mess.length - 1].content}</p>
            </div>
            `;
    // }

    // }
  }
  model.listUserContenChatUpdate(email, newString);
};
view.listContentChat = (data) => {
  document.getElementById("container-userList").innerHTML = "";
  for (let index = 0; index < data.length; index++) {
    document.getElementById("container-userList").innerHTML +=
      data[index].content;
  }
  //Click User in ListChat Bar-Only for Admin
  // let listChat = document.querySelectorAll(".user1");
  // console.log(listChat)
  // for (let index = 0; index < listChat.length; index++) {
  //   listChat[index].onclick = (e) => {
  //     e.preventDefault()
  //     let email = listChat[index].id;
  //     document.getElementById("chat-container-header").innerHTML=email
  //     console.log(email);
  //     model.getContentChatFromAdmin(email);
  //     view.pushMessage(email);
  //   };
  // }
  let listChatContainer = document.getElementsByClassName("container-userList")[0];
  listChatContainer.onclick = function(e) {
    if(e.target.classList.contains("user1")) {
      let email = e.target.id;
      document.getElementById("chat-container-header").innerHTML=email
      console.log(email);
      model.getContentChatFromAdmin(email);
      // localStorage.setItem("doc",email)
      // model.clearSnapshot();
      view.pushMessage(email);
    }
  }
};

//Sound new Message
view.playSound = () => {
  const audio = new Audio("./Image/slack_notification.mp3");
  audio.play();
};
