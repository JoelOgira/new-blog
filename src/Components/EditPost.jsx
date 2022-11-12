import { useEffect } from "react";
import { useParams} from "react-router-dom";


const EditPost = ({ posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    
    useEffect(() => {
      if(post) {
        setEditTitle(post.title);
        setEditBody(post.body);
      }
    }, [post, setEditTitle, setEditBody])
    
    return (
    <div className="card editCard p-2">
        <h1 className="text-center text-light mb-3">Edit Post</h1>
          <form className="newFormPost p-4" onSubmit={ e => e.preventDefault()}>
            <label htmlFor="postTitle">Title </label>
            <input 
              id="editTitle"
              type="text" 
              className="form-control mb-4"
              required
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
            />        
            <label htmlFor="postBody">Post </label>
            <textarea 
              id="editBody" 
              rows="15"
              className="form-control mb-4" 
              required
              value={editBody}
              onChange={e => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)} style={{width: '100%'}} className="btn btn-outline-success text-teal">Edit Post</button>
          </form>
    </div>
    )
}

export default EditPost;