import "./header.css"

export default function Header(){
    return(
        <div className="header">
<div className="headerTitles">
    <span className="headerTitleSm">Personal blog</span>
    <span className="headerTitleLg">WELCOME</span>

</div>
<div className="headerImg">
<img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/14214711/pexels-photo-14214711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/14214711/pexels-photo-14214711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
</div>
        </div>
    )
}