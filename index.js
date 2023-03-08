window.onload=()=>{
  
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           console.log(111);;
          view.setscreenActive("wellcome")
          console.log(auth.currentUser.email);
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user);
          // ...
          model.getListUserContenChatUpdate()
          // snapshot ListcontentChat
          firebase.firestore()
          .collection("ListChat")
          .onSnapshot((data)=>{
            let arr=data.docs.map((item)=>item.data())
            view.listContentChat(arr)
          })
          
        } else {
            console.log("user not sign in");
            view.setscreenActive("wellcome")
            document.querySelector(".user-container").innerHTML=`
            <button class="btn btn-primary" type="submit">Login</button>
            `
            let login=document.querySelector(".btn-primary")
            login.addEventListener("click",()=>{
              view.setscreenActive("login")
            })

           
          // User is signed out
          // ...
        }
      });
    
      

}