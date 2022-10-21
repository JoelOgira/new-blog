import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
    <div className="Post card mb-3 p-4">
        <Link to={`/post/${post.id}`}>
            <h2 className="card-title">{post.title}</h2>
            <h6 className="card-text">{post.datetime}</h6>                                                              
        </Link>
        <hr className="my-2" />
        {(post.body).length <= 30 ? post : `${(post.body).slice(0, 30)} ... `}
    </div>
    )
}

export default Post;