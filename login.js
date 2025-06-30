
const login=document.getElementById("btnsign-htm")
login.addEventListener("click",(e)=>{
    e.preventDefault()
    let isvalid= true 
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password")

    if(name.value == "")
    {
        isvalid=false
        document.getElementById("nameerror").innerHTML=" first name is requried"
        document.getElementById("nameerror").style.color="#C75724"
    }
    else
    {
        document.getElementById("nameerror").innerText=""
    }
    if(email.value == "")
    {
        isvalid=false
        document.getElementById("emailerror").innerText="email is requried"
        document.getElementById("emailerror").style.color="#C75724"
    }
    else
    {
        document.getElementById("emailerror").innerText=""
    }
    if(password.value == "")
    {
        isvalid=false
        document.getElementById("passworderror").innerText="password is requried"
        document.getElementById("passworderror").style.color="#C75724"
    }
    else
    {
        document.getElementById("passworderror").innerText=""
    } 
    
    
    if(isvalid==true)
        {
            let arr =JSON.parse(localStorage.getItem('userinfo')) || []
            alert("succecfully login")
            let obj={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value
            }
            arr.push(obj)
            localStorage.setItem('userinfo',JSON.stringify(arr))
            
        }
        else
        {
           alert("please fill all the details")
        }      
})

const signIn=document.getElementById("btnsignn-htm")
signIn.addEventListener("click",(e)=>{
  e.preventDefault()
  let isvalid=true
  let name=document.getElementById("signin-name");
  let password=document.getElementById("signin-password");
  

  if(name.value=="")
    {
      isvalid=false
      document.getElementById("namearr").innerHTML="first name is requried"
      document.getElementById("namearr").style.color="#C75724"
    }
    else
    {
        document.getElementById("namearr").innerText=""
    }
    if(password.value == "")
      {
        isvalid=false
        document.getElementById("passwordarr").innerText="password is requried"
        document.getElementById("passwordarr").style.color="#C75724"

      }
      else
    {
        document.getElementById("passwordarr").innerText=""
    }


    if(isvalid==true)
      {
        let signinobj={
           name:document.getElementById("signin-name").value,
           password:document.getElementById("signin-password").value
        }
        let loginformdata=JSON.parse(localStorage.getItem("userinfo"));
        let store= loginformdata.filter((el, i) => el.name == signinobj.name && el.password == signinobj.password)
        
        if(store[0]){
          alert("login successfull")
          window.location="home.html"
        }
        else
        {
          alert("login failed")
        }
      }
      else{
        alert("FILL UP FORM")
      }
})



