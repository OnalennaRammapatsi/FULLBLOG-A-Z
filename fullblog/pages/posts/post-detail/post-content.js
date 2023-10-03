import PostHeader from "./post-header";
import classes from './post-content.module.css';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';


function PostContent(props) {
        const { post } = props;
        const imagePath = `images/posts/${post.slug}/${post.image}`

const CustomRenderers = {
        image(image) {
        return <Image  src={ `images/posts/${post.slug}/${post.image}`} 
        alt={image.alt} 
        width={600} 
        height={300} />
        }
}

return (
        <article className={classes.content}>
                <PostHeader title={post.title} image={imagePath} />
                <ReactMarkdown renderers={ CustomRenderers}> {post.content}</ReactMarkdown>
        </article>
        );
}

export default PostContent;