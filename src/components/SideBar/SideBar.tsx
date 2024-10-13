import axios from "axios";
import "./SideBar.css"
import { useNavigate } from "react-router-dom";
function SideBar() {
    const navigate = useNavigate()

   async function Logout() {
       await axios.post("https://test1.focal-x.com/api/logout", {} ,
            {
                headers : {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
            .then(() => {
                localStorage.removeItem('token')
                navigate("/SignIn")
            })
            .catch(error => {
                console.error('Error Logout user:', error);
                
            });
    }
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/assets/images/logo.png" />
            </div>
            <div>
                <img className="profile-img" src="/assets/images/profileimage.png" />
                <h1>your Name</h1>
            </div>
            <div className="links">
                <ul>
                    <li className="linkactiv"><img src="/assets/images/Products.png" />Products</li>
                    <li><img src="/assets/images/bookmark.png" />Favorites</li>
                    <li><img src="/assets/images/bookmark.png" />order list</li>
                    <button className="logout-btn" onClick={Logout}>Logout<img src="/assets/images/signout.png" /></button>
                </ul>
            </div>
        </div>
    )
}

export default SideBar