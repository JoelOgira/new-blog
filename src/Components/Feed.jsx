import Post from "./Post";

const Feed = ({ posts }) => {
    return (
    <main className="Feed container">
        {posts.map(post => <Post post={post} key={post.id}/>)}
    </main>
    )
}

export default Feed;