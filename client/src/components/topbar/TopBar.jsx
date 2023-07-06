import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

 function TopBar()
{
    const {user,dispatch} = useContext(Context)
    const PF="http://localhost:5000/images/"

    const handleLogout= ()=>{
        dispatch({type:"LOGOUT"});
    }

    return(
        <div className="top">
<div className="topleft">
<i className="topIcon fa-solid fa-b"></i>
             <i className="topIcon fa-solid fa-l"></i>
             <i className="topIcon fa-solid fa-o"></i>
             <i className="topIcon fa-solid fa-g"></i>
             <i className="topIcon fa-solid fa-i"></i>
             <i className="topIcon fa-solid fa-f"></i>
             <i className="topIcon fa-solid fa-y"></i>

</div>
<div className="topcenter">
<ul className="topList">
    <li className="topListItem">
        <Link className="link" to="/">HOME</Link>
    </li>
    
    <li className="topListItem">
    <Link className="link" to="/">CONTACT</Link>

    </li>
    <li className="topListItem">
    <Link className="link" to="/write">WRITE</Link>

    </li>
    <li className="topListItem" onClick={handleLogout}>
{user && "LOGOUT"}
    </li>

</ul>
</div>
<div className="topright">
    {
    user?(
        <Link to="/settings">
    <img className="topImage"src={PF+user.profilePic} alt="" /></Link>
    ):(<ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
             </li>
             <li className="topListItem">
       <Link className="link" to="/register">REGISTER</Link>
             </li>
       </ul>
    )

    }
<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
</div>

        </div>
    )
}

export default TopBar;