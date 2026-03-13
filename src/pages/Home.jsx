import Post from "../components/Post";
import { PostContext } from "../contexts/PostContext";
import {useContext} from 'react'

function Home() {
    const { posts} = useContext(PostContext)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center"
        }}>
            <h3>Blog Posts</h3>

            <ul style={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                justifyContent: "center",
            }}>
                {posts.map((post) => (
                    <Post post={ post } key={post.id} />
                ))}
            </ul>
        </div>
    )
}

export default Home;