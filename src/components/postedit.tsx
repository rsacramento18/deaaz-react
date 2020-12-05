import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Editor } from '@tinymce/tinymce-react';

const PostEdit = (props : any) => {

    const [writeHidden, setWriteHidden] = useState(true);

    const { register, handleSubmit } = useForm();

    const [post, setPost] = useState({id: 0, title: "", subtitle: "", content: ""});

    const toggleWriteHidden = () => {
        setWriteHidden(!writeHidden);
    }

    const writeNewPost = () => {
        setPost({id: 0, title: "", subtitle: "", content: ""});
        toggleWriteHidden();
    }

    const editPost = (postIndex : any) => {
        setPost(props.posts[postIndex]);
        toggleWriteHidden();
    }

    const changeTitle = (title: any) => {
        var postSave = post;
        postSave.title = title;
        setPost(postSave);
    }

    const changeSubtitle = (subtitle: any) => {
        var postSave = post;
        postSave.subtitle = subtitle;
        setPost(postSave);
        console.log(post);
    }


    const savePost = (data: any) => {
        var postSave = post;
        postSave.title = data.title;
        postSave.subtitle = data.subtitle;
        setPost(postSave);
        console.log("Post saved");
        console.log(post);
    }


    const handleEditorChange = (content :any, editor : any) => {
        var postToEdit = post;
        postToEdit.content = content;
        setPost(postToEdit);
    }


    return (
        <div className="post-edit">
            <div className="post-options">
                <button className="escreverBt" onClick={writeNewPost}>escrever 
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} />
                </button>
            </div>
            { writeHidden === false &&
            <div className="post-create">
                <div className="popup-wrapper">
                    <div className="create-section">
                        <div className="section-subtitle">
                            <h1>escrever</h1>
                        </div>
                        <form onSubmit={handleSubmit(savePost)}>
                            <div className="titles-form">
                                <div>
                                    <input type="text" name="title" ref={register} placeholder="title" onChange={(e) => changeTitle(e.target.value)} defaultValue={post.title}/>
                                </div>
                                <div>
                                    <input type="text" name="subtitle" ref={register} placeholder="subtitle" onChange={(e) => changeSubtitle(e.target.value)} defaultValue={post.subtitle}/>
                                </div>
                            </div>
                            <Editor
                                apiKey="adxsjb6lizs93r0q63jf1fp0glkkgwpslgia6bztougfcyon" 
                                initialValue={ post.content }
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help'
                                }}
                                onEditorChange={ handleEditorChange }
                            />
                            <div className="popup-buttons">
                                <button type="submit" className="saveBt">guardar
                                    <FontAwesomeIcon className="icon" icon={ faSave } />
                                </button>
                                <button className="closeBt" onClick={ toggleWriteHidden }>fechar
                                    <FontAwesomeIcon className="icon" icon={ faTimes } />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }
            { props.posts.map((post: any, index: number) => {
                return (
                    <div key={index}>
                        <div  className="post" onClick={() => editPost(index)}>
                            <div className="post-info">
                                <span className="post-info-title">{ post.title }</span>
                                <span className="post-info-subtitle">{ post.subtitle }</span>
                                <span className="post-info-date">{ post.date }</span>
                            </div>
                            <div className="post-content">
                                <span>{ post.content }</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostEdit;
