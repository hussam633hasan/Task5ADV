
import { FormEvent, SetStateAction, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar"
import axios from "axios"
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPG", "PNG", "GIF" , "JPEG" , "WebP"];

function AddItem() {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    // const [image, setimage] = useState(null)
    const [file, setFile] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/SignIn")
        }
    })
    function send(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        axios.post("https://test1.focal-x.com/api/items" , {
            name : name,
            price : price,
            image : file,
        } , {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Content-Type" : "multipart/form-data"
            }
        })
        .then(res => {
          console.log(res.data)
          navigate("/")
        })
        .catch(error => console.log(error))
      }
      const handleChange = (file: SetStateAction<null>) => {
        setFile(file);
      };
  return (
    <div>
        <SideBar />
        <form onSubmit={(event)=>send(event)}>
            <input type="text" placeholder="name" onChange={(event)=>setname(event.target.value)}/>
            <input type="text" placeholder="price" onChange={(event)=>setprice(event.target.value)}/>
            {/* <input type="file" onChange={(event)=>setimage(event.target.files[0])}/> */}
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            <input type="submit" value="SAVE" />
        </form>
    </div>
  )
}

export default AddItem