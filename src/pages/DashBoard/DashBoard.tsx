import { useEffect, useState } from "react"
import SideBar from "../../components/SideBar/SideBar"
import "./DashBoard.css"
import { Link, useNavigate} from "react-router-dom"
import axios from "axios"


interface Item {
    id: string;
    image_url: string;
    price: string;
    name: string;
}

function DashBoard() {

    const navigate = useNavigate()
    const [items, setitems] = useState<Item[]>()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/SignIn")
        }
        axios.get<Item[]>("https://test1.focal-x.com/api/items", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => setitems(res.data))
    })
    function Remove(id: string) {
        axios.delete(`https://test1.focal-x.com/api/items/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => res.data)
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    }

    return (
        <section className="dashboard">
            <SideBar />
            <div>
                <div>
                    <input type="text" placeholder="" style={{ marginBottom: '20px', padding: '10px', width: '100%' }}/>
                    <img src="/assets/images/search.png" />
                </div>
                <Link to="/add">
                    <button>ADD NEW PRODUCT</button>
                </Link>
                <div className="img-cards">
                    {
                        items?.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="img-card">
                                        <Link to={`/showitem/${item.id}`}>
                                            <img src={item.image_url} alt="item photo" className="item-photo" />
                                        </Link>
                                        <div className="buttons">
                                            <Link to={`/updateItem/${item.id}`}>
                                                <button className="btn">Edite</button>
                                            </Link>
                                            <button onClick={() => Remove(item.id)} className="btn">Remove</button>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
   
                </div>
            </div>
        </section>
    )
}


export default DashBoard