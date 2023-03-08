const controller={}
controller.register=(data)=>{
  if (data.userName=="") {
    view.getError("user-error","Please insert Username")
  }else{
    view.getError("user-error","")
  }
  if (!view.checkEmail(data.email)) {
    view.getError("email-error","Please insert Email")
  }else{
    view.getError("email-error","")
  }
  if (!view.checkPass(data.password)) {
    view.getError("password-error","Please insert Password")
  }else{
    view.getError("password-error","")
  }
  if (data.password!==data.confirmPassword) {
    view.getError("confirm-error","Confirm password not match")

  }else{
    view.getError("confirm-error","")
  }
  if (data.userName!==""&&view.checkEmail(data.email)
  &&view.checkPass(data.password)&&data.password==data.confirmPassword) {
    // view.setscreenActive("login");
    model.register(data)
  }
}
controller.login=(data)=>{
  if (data.email=="") {
    view.setErrorMessage("email-error","Please input email")
  }else{
    view.setErrorMessage("email-error","")
  }
  //validate pass
  if (data.password=="") {
    
    view.setErrorMessage("password-error","Please fill password")
  }else{
    view.setErrorMessage("password-error","")
  }
 
  if (data.email&&data.password) {
    model.login(data) // đổ dữ liệu lên model
   //  model.getUserProfile(data)
  }
 }