import { useForm } from 'react-hook-form'
import { useParams ,useNavigate} from 'react-router-dom'
import { PostContext } from '../contexts/PostContext';
import { useContext, useEffect } from 'react';

function EditPost() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const { id } = useParams();

    const navigate = useNavigate();

    const { findPostById, updatedPost } = useContext(PostContext);

    const post = findPostById(Number(id));

    useEffect(() => {
        if (post) {
            reset({ title: post.title, content: post.content })     
        }
    },[post])


    function onSubmit(data) {
        updatedPost({ ...data, id: Number(id) });
        navigate('/')
    }

    if (!post) {
        return <p>Post not Found</p>
    }
    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h3>Edit Post Page</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    gap: 20
                }}>
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="enter the title ..."
                        {...register("title", {
                            required: 'Title is required',
                            minLength: {
                                value: 3,
                                message: 'title should be atleast 3 characters'
                            }
                        })}
                    />
                    {errors.title && (
                        <p style={{ color: "red" }}>{errors.title.message}</p>
                    )}
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    gap: 10
                }}>
                    <label>Content</label>
                    <input
                        type="text"
                        placeholder="enter the content ..."
                        {...register("content", {
                            required: 'Content is required',
                            minLength: {
                                value: 10,
                                message: 'content should be atleast 10 characters'
                            }
                        })}
                    />
                    {errors.content && (
                        <p style={{ color: "red" }}>{errors.content.message}</p>
                    )}
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    gap: 20
                }}>
                    <button>Update Post</button>
                </div>

            </form>
        </div>    
    )
}

export default EditPost;