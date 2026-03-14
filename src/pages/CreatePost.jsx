import { useForm } from 'react-hook-form'
import { PostContext } from '../contexts/PostContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

function CreatePost() {

    const {addPost} = useContext(PostContext)

    const { 
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const navigate = useNavigate()

    function onSubmit(data) {
        addPost(data);
        navigate("/")
    }

    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h3>Create Post Page</h3>
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
                                message:'title should be atleast 3 characters'
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
                    <button>Create Post</button>
                </div>

            </form>
        </div>
    )
}

export default CreatePost;