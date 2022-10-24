import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <div className=" post-card card p-4 mb-3">
        <Link to={`/post/${post.id}`}>
            <h3 className="card-title">{post.title}</h3>
            <h6 className="card-text">{post.datetime}</h6>
        </Link>
        <hr />
        <p className="card-text">
            {(post.body).length <= 45 ? post.body :
                `${(post.body).slice(0, 45)} ...`
            }
        </p>
    </div>
  )
}

export default Post