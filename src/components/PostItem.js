
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function PostItem({ post }) {
    const navigate = useNavigate();

    let image = "https://imengine.public.mhm.infomaker.io/?uuid=71ea615e-efcb-4289-84e7-ebd1009f14b2&function=cropresize&type=preview&source=false&q=60&crop_w=0.999&crop_h=0.999&width=1200&height=800&x=0&y=0";
    

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <div className="timeline-container">
             <div className="post-image" style={{backgroundImage: `url(${image})`}}></div>
        <article className="timeline-content" onClick={() => navigate(post.slug)}>
            <h2>{parse(post.title.rendered)}</h2>

            <p>
                {post.acf.body}
            </p>
            <p>
                {post.acf.website ? (
                    <a href={post.acf.website} target="_blank">
                        link til website
                    </a>
                ) : (

                <p>intet link </p>
                )}
            </p>

          
        </article>
        </div>
    );

    
}
