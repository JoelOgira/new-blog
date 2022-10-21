import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {

    const { id } = useParams();
    const post = posts.find(post => post.id == id);

    return (
    <main className="PostPage container">
        <div className="card p-4">
            {post &&
                <>              
                    <h2 className="card-title">{post.title}</h2>
                    <h6 className="card-text">{post.datetime}</h6>
                    <hr className="my-3" />
                    <p className="card-text">{post.body}</p>   
                    <button onClick={() => handleDelete(post.id)} className="btn btn-outline-danger">Delete Post</button>                 
                </>
            }
            {!post &&
                <>
                    <h3 className="card-title text-center mb-4">No Post is available</h3>
                    <Link className="text-center">Go back to homepage</Link>
                </>
            }
        </div>
    </main>
    )
}

export default PostPage;