import { createContext, useState } from "react";


export const PostContext = createContext();

function PostProvider(props) {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Hello world',
            content: 'welocme to my first blog'
        },
        {
            id: 2,
            title: "second post",
            content: 'my second post for the purpose to learning it'
        },
    ])

    function addPost(newPost) {
        const lastId = posts.at(-1).id
        setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
    }

    function findPostById(id) {
        return posts.find((post)=>post.id === id)
    }

    function updatedPost(updatedPost) {
        setPosts((prev) => prev.map((post)=> post.id === updatedPost.id ? updatedPost : post));
    }

    return (
        <PostContext.Provider value={{ posts, addPost,findPostById,updatedPost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider