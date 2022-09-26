import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function PostPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = ` https://headless.freakysneaky.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    let image = "";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <div className="background">
        
        
            <section className="page">
    
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

            <section className="post-row">

                <article className="post-indhold">
         <img className="post-billede" src={image}  />
                    <h3>{post.title && parse(post.title.rendered)}</h3>
                   <p> {post.content && parse(post.content.rendered)} </p>
                   
                </article>
               
                
                
            </section>
            <footer>
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
        </section>
            </div>
        
    );
}
