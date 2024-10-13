import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import "./showItem.css"
interface Item {
  id: number,
  image_url: string,
  price: string,
  name: string,
  created_at: number,
  updated_at: number,
}

function ShowItem() {
  const params = useParams()
  const [items, setitems] = useState<Item | null>(null);
  useEffect(() => {
    axios.get(`https://test1.focal-x.com/api/items/${params.id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => setitems(res.data))
  }, [])
  // console.log(items)
  return (
    <section className="d-flex">
      <SideBar />
      <h1 className="title">{items?.name}</h1>
      <div className="content">
        
        <div className="">
          <img src={items?.image_url} alt="item photo" className="item-single-photo" />
        </div>
        <div>
         <div className="price"> <h1>price:</h1><p>{items?.price}$</p></div>
          <div className="price"><h1>Added at:</h1><p>{items?.created_at}</p></div>
        </div>
        <div>
          <h1>updated at:</h1><p> {items?.updated_at}</p>
        </div>
      </div>
    </section>
  )
}

export default ShowItem