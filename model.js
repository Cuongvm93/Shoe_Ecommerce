const model={
    
}
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCigSIgQRvhDCYQljwPQxDqujiw_VvW0B8",
    authDomain: "ecomerce-project-f455c.firebaseapp.com",
    projectId: "ecomerce-project-f455c",
    storageBucket: "gs://ecomerce-project-f455c.appspot.com",
    messagingSenderId: "756279086762",
    appId: "1:756279086762:web:4ff6dee0188a223df2cad3",
    measurementId: "G-2REKG9LKWN" /* Firebase config */
  });
  const storageRef=firebase.storage().ref();
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
model.register= async (data)=>{
    console.log("88888",data);
    try{
        let dataUser="";
        let photoUrl="";
       let response= await auth.createUserWithEmailAndPassword(data.email,data.password);
       console.log("777",response);
       view.setscreenActive("login")
    //    auth.currentUser.sendEmailVerification();//send email verify
    // const task=storageRef.child(data.file.name).put(data.file,data.file.type)
    // task
    // .then((snapshot)=> snapshot.ref.getDownloadURL())
    // .then((url)=>{
    //     firebase.auth().currentUser.updateProfile({
    //         displayName:data.userName,
    //         photoURL:url
    //        })
    // })
    //Build first conversation
    let firstMess={
        content:"Hey there! How can we help you?",
        owner: "Cuongvu6693@gmail.com"
    }
    console.log(auth.currentUser.email);
        await firebase.firestore()
              .collection("User")
              .doc(auth.currentUser.email)
              .set({Mess:firebase.firestore.FieldValue.arrayUnion(firstMess)})
    //    console.log(url);
       
    //    dataUser=auth.currentUser.displayName
    //    view.dataUser(dataUser) 
    }
    catch(error){
        alert(error.message)
    }
    
}
model.login = async (data) => {
    try {
        let respone = await auth.signInWithEmailAndPassword(data.email, data.password);
        console.log("success!");
        console.log("PhotoURL",firebase.auth().currentUser.photoURL);
        console.log("username", firebase.auth().currentUser.displayName)
        // if (auth.currentUser.emailVerified) {// sét điều kiện respone được trả và email đã được verified
            console.log(auth.currentUser.email);
            view.dataUser(auth.currentUser.displayName,auth.currentUser.photoURL)
            view.setscreenActive("wellcome")
        // }else{
        //     alert("Bạn chưa verify")
        // }
    }
    catch (error) {
        console.log(error.message)
    }
    // 
}
model.signOut=async()=>{
    try{
        await firebase.auth().signOut()
        view.setscreenActive("login")    
    }
    catch(error){
        console.log(error.Message);
    }
}
model.loadProduct= async (data)=>{

    try{
        console.log(data,"00000");
           let respone = await firebase.firestore()
              .collection("Product")
              .doc(data)
              .get()

        console.log(respone.data().product2);
      
        view.product(respone.data().product2)
    }
    catch(error)
    {
        console.log(error.Message,"888");
    }
}
// Add to Cart
model.addToCart= async(data)=>{
    try{
        data.num=1;
    let respone= await firebase.firestore()
              .collection("User")
              .doc(auth.currentUser.email)
              .get()
    if (respone.data().cart==undefined) {
        let cart= await firebase.firestore()
        .collection("User")
        .doc(auth.currentUser.email)
        .update({
            cart:firebase.firestore.FieldValue.arrayUnion(data)
        })
            
    }else{
        console.log(respone.data().cart);
        let dataCart= respone.data().cart;
        let flag=0;
        for (let index = 0; index < dataCart.length; index++) {
            let quanty= Number(dataCart[index].num)     
            if (data.id==dataCart[index].id) {
                flag=1;
                quanty++
                dataCart[index].num=quanty
            }
        }        
        if (flag==0) {
            await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .update({
                cart:firebase.firestore.FieldValue.arrayUnion(data)
            })
        }else{
            await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .update({
                cart:firebase.firestore.FieldValue.delete()
            })
        for (let index = 0; index < dataCart.length; index++) {
            await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .update({
                cart:firebase.firestore.FieldValue.arrayUnion(dataCart[index])
            })
            
        }
        } 
    }
    model.cartChange()
    // let dataCartFinal= await firebase.firestore()
    //                          .collection("User")
    //                          .doc("Cuongvu6693@gmail.com")
    //                          .get()
    //  console.log(dataCartFinal.data().cart);
    // view.listAddtocart(dataCartFinal.data().cart)
    }
    
    catch(error)
    {
        console.log(error);
    }
}
//Get sort data Form CLoud
model.getSortData= async (arr1,arr2,arr3)=>{
    try{
        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
        let getdataSort=[]
        let getdataSort2=[]
        let getdataSort3=[]
        let respone= await firebase.firestore()
        .collection("Product")
        .get()
        console.log(1111);
        let arrDataAlldocs=respone.docs.map((item)=>{
         return item.data().product2
        })
        console.log(arrDataAlldocs);
        let arrDataAll=arrDataAlldocs.reduce((a,b)=>{
            return a.concat(b)
        })
        console.log(arrDataAll);


        //sort with price
        if (arr1.length!=0) {
            console.log("cuongvm");
            
        for (let index = 0; index < arrDataAll.length; index++) {            
                if (arrDataAll[index].price>=arr1[0] &&arrDataAll[index].price<=arr1[1] ) {
                getdataSort.push(arrDataAll[index])
                }
        } console.log(getdataSort); 
        if (arr2.length!=0) {
            console.log(12313123);
            for (let index = 0; index < getdataSort.length; index++) {
               if (arr2.indexOf(getdataSort[index].brand)!=-1) {
                 getdataSort2.push(getdataSort[index])
               }
                
            }
        }else{
            console.log(111111);
            getdataSort2=getdataSort
        } 
        console.log(getdataSort2); 
        if (arr3.length!=0) {
            for (let index = 0; index < getdataSort2.length; index++) {
                if (arr3.indexOf(getdataSort2[index].cate)!=-1) {
                  getdataSort3.push(getdataSort2[index])
                }
        }  
           console.log(getdataSort3 );  
        }else{
            getdataSort3=getdataSort2
        }
        
        console.log(getdataSort3);
        view.product(getdataSort3)// final
     }else{
        if (arr2.length!=0) {
            console.log(12313123);
            for (let index = 0; index < arrDataAll.length; index++) {
               if (arr2.indexOf(arrDataAll[index].brand)!=-1) {
                 getdataSort2.push(arrDataAll[index])
               }
                
            }
           if (arr3.length!=0) {
            for (let index = 0; index < getdataSort2.length; index++) {
                if (arr3.indexOf(getdataSort2[index].cate)!=-1) {
                  getdataSort3.push(getdataSort2[index])
                }   
             }
             console.log(getdataSort3);
             view.product(getdataSort3) //final
           }else{
             getdataSort3=getdataSort2
             console.log(getdataSort3);
             view.product(getdataSort3)// final
           }
     }else{
        for (let index = 0; index < arrDataAll.length; index++) {
            if (arr3.indexOf(arrDataAll[index].cate)!=-1) {
              getdataSort3.push(arrDataAll[index])
            }   
         }
         console.log(getdataSort3);
         view.product(getdataSort3)// final
     }
    }
     console.log(1111);
    }
    catch(error)
    {
        console.log(error.Message);
    }
 
}
// get data in Cart
model.getInCartData=async ()=>{
 try{
    let respone=await firebase.firestore()
       .collection("User")
       .doc(auth.currentUser.email)
       .get()
     dataInCart=respone.data().cart
     view.inCartcontent(dataInCart)
 }
 catch(error){
    error.Message
 }

}
//update cart
model.updateCart=async(data)=>{
    try{
        await firebase.firestore()
        .collection("User")
        .doc(auth.currentUser.email)
        .update({
            cart:firebase.firestore.FieldValue.delete()
        })
       if(data.length!=0){
        for (let index = 0; index < data.length; index++) {
            await firebase.firestore()
            .collection("User")
            .doc(auth.currentUser.email)
            .update({
                cart:firebase.firestore.FieldValue.arrayUnion(data[index])
            })
       }
        
    }
    model.cartChange()
    view.inCartcontent(data)
    }
    catch(error){
        console.log(error.Message);
    }
}

//snapshot cart change
model.cartChange=()=>{
    firebase.firestore()
    .collection("User")
    .doc(auth.currentUser.email)
    .onSnapshot((data)=>{
        
        view.indexOfCartIcon(data.data().cart.length)
    })
}

model.getDataProvince=async()=>{
    let respone= await fetch("https://provinces.open-api.vn/api/?depth=3")
    let data= await respone.json();
    console.log(data);
    view.optionProvince(data)
}
model.clearCart=async()=>{
    await firebase.firestore()
          .collection("User")
          .doc(auth.currentUser.email)
          .update({
            cart:firebase.firestore.FieldValue.delete()
          })
}
// Get Message
model.getMessage=async()=>{
    //Build first conversation
   
        let messData=await firebase.firestore()
              .collection("User")
              .doc(auth.currentUser.email)
              .get()
        
        if (messData.data() !=undefined) {
            view.chatMessage(messData.data().Mess)
        }

}
// Push Message to firebase
let key=""
model.getkey=(email)=>{
    console.log("emal là ",email);
    key=email
}
model.pushMessage=(data)=>{
    
    // let id= localStorage.getItem("doc")
    try{
     firebase.firestore()
        .collection("User")
        .doc(key)
        .update({Mess:firebase.firestore.FieldValue.arrayUnion(data)})
        .then(()=>{
            // console.log(respone.data());
            model.getdataMess(key)
            model.realTime()
        })
        
    }
    catch(error){
        console.log(error);
    }
}
//onSnapshot push Mesage
model.realTime=()=>{
    console.log(auth.currentUser)
    let clearSnapshot = firebase.firestore()
        .collection("User")
        .doc(key)
        .onSnapshot((data)=>{
            // console.log(data);
            // console.log(dataChat);
            console.log("snapshot",22222);
            let dataMess=data.data().Mess
            if (key==auth.currentUser.email||auth.currentUser.email=="cuongvu6693@gmail.com") {
                console.log(33333333);
               if (dataMess[dataMess.length-1].owner != auth.currentUser.email) {
                view.playSound();
                
               }
               
            }
            view.chatMessage(data.data().Mess)
            document.getElementById("chat-body-container").scrollTop=document.getElementById("chat-body-container").scrollHeight

        })
}

model.clearSnapshot = (snapId) => {
    snapId();
}

// View newMessUser in list chat
model.getdataMess=async(id)=>{
    let respone=await firebase.firestore()
                        .collection("User")
                        .doc(id)
                        .get()
    // if (respone.data().Mess.length==2) {
        let content= respone.data().Mess
        console.log(1111,"alialaialaia");
        view.viewUserList(id,content)
    // }else{
        
    
}   

model.listUserContenChatUpdate=async(email,data)=>{
    let resopne=await firebase.firestore()
                      .collection("ListChat")
                      .doc(email)
                      .set({content:data})
}
model.getListUserContenChatUpdate=async()=>{
    let respone= await firebase.firestore()
                       .collection("ListChat")
                       .get()

    let arr=respone.docs.map((item)=>item.data())
    view.listContentChat(arr)
    
}
// ContentChat From Admin
model.getContentChatFromAdmin=async(email)=>{
  let respone= await firebase.firestore()
                     .collection("User")
                     .doc(email)
                     .get()
  view.chatMessage(respone.data().Mess)
}
