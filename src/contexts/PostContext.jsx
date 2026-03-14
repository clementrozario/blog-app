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

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider