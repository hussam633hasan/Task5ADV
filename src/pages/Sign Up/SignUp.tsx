import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"


function SignUp() {

  const [image, setimage] = useState<File>()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [first_name, setfirst_name] = useState("")
  const [last_name, setlast_name] = useState("")
  const [password_confirmation, setpassword_confirmation] = useState("")
  const navigate = useNavigate()
  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    axios.post("https://test1.focal-x.com/api/register", {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      user_name: first_name + '_' + last_name,
      password_confirmation: password_confirmation,
      profile_image: image,
    }, {
      headers: {
        ' Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        localStorage.setItem("token", `Bearer ${res.data.token}`)
        navigate("/SignIn")
        console.log("done")
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="signup-page">
      <div className="signup-content">
        <div className="signup-head">
          <img src="/assets/images/logo.png"></img>
          <h1>SIGN UP</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={(event) => send(event)}>
          <p>Name</p>
          <div className="name-input">
            <input type="text" placeholder="First Name" onChange={(event) => setfirst_name(event.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(event) => setlast_name(event.target.value)} />
          </div>
          <p>Email</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" onChange={(event) => setemail(event.target.value)} />
          </div>
          <p>Password</p>
          <div className="password-input">
            <input type="password" placeholder="Enter password" onChange={(event) => setpassword(event.target.value)} />
            <input type="password" placeholder="Re-enter your password" onChange={(event) => setpassword_confirmation(event.target.value)} />
          </div>
          <div>
            <div className="drop-zone">

              <img src="/assets/images/Upload icon.png" />

              <input type="file" onChange={(event) => setimage(event.target.files[0])} />
            </div>
          </div>
          <div className="signup-btn">
            <input type="submit" value="SIGN UP" />
          </div>
          <div className="signup-footer">
          <p>Do you have an account?<Link to="/SignIn">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp


