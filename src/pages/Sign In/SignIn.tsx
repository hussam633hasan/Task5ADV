import axios from "axios"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./SignIn.css"


function SignIn() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    axios.post("https://test1.focal-x.com/api/login", {
      email: email,
      password: password
    })
      .then(res => {
        localStorage.setItem("token", `Bearer ${res.data.token}`)
        navigate("/")
      })
      .catch(error => console.log(error))
  }
  return (
    <section className="SignIn-page">
      <div className="SignIn-content">
        <div className="SignIn-head">
          <img src="/assets/images/logo.png"></img>
          <h1>SIGN IN</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={(event) => send(event)}>
          <p>Email</p>
          <div className="email-inputt">
            <input type="email" placeholder="Enter your email" onChange={(event) => setemail(event.target.value)} />
          </div>
          <p>Password</p>
          <div className="password-inputt">
            <input type="password" placeholder="Enter your password" onChange={(event) => setpassword(event.target.value)} />
          </div>
         <div className="SignIn-btn">
         <input type="submit" value="SIGN IN" />
         </div>
          <div className="SignIn-footer">
          <p>Don’t have an account? <Link to="/SignUp">Create one</Link></p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignIn