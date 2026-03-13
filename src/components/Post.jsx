

function Post(props){
    return (
        <div style={{
            padding: 20,
            width: 300,
            margin:10,
            border:"solid 3px"
        }}>
            <h4>{props.post.title}</h4>
            <p>{props.post.content}</p>
        </div>
    )
}

export default Post;