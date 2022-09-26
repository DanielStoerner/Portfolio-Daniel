import { useState,useEffect } from "react";
import PostItem from "../components/PostItem";

export default function HomePage() {
  
  const [posts, setPosts] = useState([]);

useEffect(() => {
    async function getData() {
        const res = await fetch ("http://headless.freakysneaky.dk/wp-json/wp/v2/posts?_embed");
        const data = await res.json();
        console.log(data);
        setPosts(data);
    }
    getData();
}, []);

    return (
        
        <div className="grid-wrap">
                <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <div className="forside-intro">
         <h1> <div className="post-overskrift-farve">Projects</div></h1>
    </div>
   <div className="post-mobile-container">
        <div className="post-mobile">
            {posts.map((post,index) => <PostItem key={index} post={post}/>)} 
        </div>
        </div>
        <section className="grid-container">
           
		<div className="timeline-left">
            {posts.map((post,index) => (index % 2) ? <PostItem key={index} post={post} /> : <div className="timeline-filler"></div> )}
        </div>
        <div className="timeline-mid">
        {posts.map((post) =>    
            <div className="timeline-point">     
                <div className="timeline-line"></div>
                <div className="timeline-ball"><p className="timeline-dato">{post.acf.order}</p></div>
            </div>
        )}
        </div>

        
       

        <div className="timeline-right">
             {posts.map((post,index) => !(index % 2) ? <PostItem key={index} post={post} /> : <div className="timeline-filler"></div> )}
        </div>
        
    
    
        </section>
        <footer className="footer1">
        <div class="footer-content">
            <h3>Contact description</h3>
            <p> if you want more information, use the links below, feel free to use the contact site, for directly contact. I will response as fast as possible, there are no such things as dumb questions, so just shoot!</p>
            <ul class="socials">
                <li><a href="https://www.facebook.com/profile.php?id=100001201454939"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/danielstoerner/"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://github.com/DanielStoerner"><i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/daniel-st%C3%B8rner-a79497251/"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2022 <a href="https://github.com/DanielStoerner">Daniel Størner</a>  </p>
                    <div class="footer-menu">
                    </div>
        </div>

    </footer>
        </div>
        
      
</div>



    );

}  

