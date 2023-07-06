import { useContext, useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar(){
    const {user,dispatch} = useContext(Context)
    const PF="http://localhost:5000/images/"
    const[cats,setCats]= useState([]);
    useEffect(()=>{
        const getCats= async()=>
        {
            const res= await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, []);
    return(

        <div className="sidebar">
         <div className="sidebarItem">
           <img src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" className="sidebarImg" />
              <p>Where Words and Images Collide. Create captivating blog posts with seamless image integration. Express your creativity, share your stories, and connect with a vibrant community. Effortless post creation, social sharing, and mobile-friendly design. Unleash your voice and let your words and images shine. Join Blogify today.</p>
           </div>
            <div className="sidebarItem">
                <span className="sidebarTitle1">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link"> 
                         <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                        </ul>
            </div>
          <div className="sidebarItem">
             <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
     </div>
    )
}