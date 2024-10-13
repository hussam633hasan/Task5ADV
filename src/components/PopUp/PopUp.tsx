// import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// interface PopupProps {
//     onClose: () => void;
// }
// interface Item {
//     id: number,
//     image_url: string,
//     price: string,
//     name: string,
//     created_at: number,
//     updated_at: number,
//   }

// const Popup: React.FC<PopupProps> = ({ onClose }) => {
//     const [items, setitems] = useState<Item[]>()
//     const params = useParams()
//     function deletitem(id: any){
//              axios.delete(`https://test1.focal-x.com/api/items/${params.id}`)
//             .then(res => setitems(res.data))
//             .then(() => console.log("done"))
//             .catch(error => console.log(error))    
//     } 

//     return (
//         <div style={overlayStyle}>
//             <div style={popupStyle}>
//                 <button onClick={() => {  onClose(); deletitem }}>Yes</button>
//                 <button onClick={() => {  onClose(); }}>No</button>
//             </div>
//         </div>
//     );
// };

// const overlayStyle: React.CSSProperties = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

// const popupStyle: React.CSSProperties = {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// };

// export default Popup;