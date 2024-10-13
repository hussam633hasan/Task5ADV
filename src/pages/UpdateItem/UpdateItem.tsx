import { FormEvent, SetStateAction, useEffect, useState } from "react"
import "./UpdateItem.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar";
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG", "GIF" , "JPEG" , "WebP"];

interface Item {
    id: number,
    image: string,
    price: string,
    name: string,
    created_at: number,
    updated_at: number,
}

function UpdateItem() {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    // const [image, setimage] = useState(null);
    const [file, setFile] = useState(null);
    const params = useParams()
    const [items, setitems] = useState<Item | null>(null);
    const navigate = useNavigate()

    async function UpdateItem(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        await axios.post(`https://test1.focal-x.com/api/items/${params.id} `, {
            name: name,
            price: price,
            image: file || "/assets/images/Defaultimg.png",
            _method: 'PUT'
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: ` Bearer ${localStorage.getItem('token')}`,
            }
        })
        navigate("/")
    }
    useEffect(() => {
        axios.get(`https://test1.focal-x.com/api/items/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setitems(res.data);
                setname(res.data.name);
                setprice(res.data.price);
                setFile(res.data.image);
            })
    }, [])
    const handleChange = (file: SetStateAction<null>) => {
        setFile(file);
      };

    return (
        <div className="edit-item">
            <SideBar />
            <form onSubmit={(event) => UpdateItem(event)}>
                <input className="email-inputt" type="text" placeholder="name" onChange={(event) => setname(event.target.value)} defaultValue={items?.name} />
                <input type="text" placeholder="price" onChange={(event) => setprice(event.target.value)} defaultValue={items?.price} />
                {/* <input type="file" onChange={(event) => setimage(event.target.files[0])} /> */}
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                <input type="submit" value="SAVE" />
            </form>
        </div>


    )
}

export default UpdateItem

