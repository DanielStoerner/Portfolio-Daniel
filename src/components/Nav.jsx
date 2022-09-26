import { NavLink } from "react-router-dom";

export default function Nav() {
    function myMenu() {
        var x = document.getElementById("sidebar-menu");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
    return (
        <div className="navbar">
         <i className="fa fa-bars" onClick={myMenu}></i>
        
           <div id="sidebar-menu">
                <NavLink to="/" end>
                    <span className="streger-farve">\\</span>Home
                </NavLink>
                <NavLink to="/posts"><span className="streger-farve5">\\</span>Projects</NavLink>
                <a href="https://formsubmit.co/el/ritawi"><span className="streger-farve6">\\</span>Contact</a>
            </div>
        </div>
       
        
    );

    
}
