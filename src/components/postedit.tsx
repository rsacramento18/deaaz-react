import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Editor } from '@tinymce/tinymce-react';

const PostEdit = (props : any) => {

    const [writeHidden, setWriteHidden] = useState(true);
    const [topProperty, setTopProperty] = useState(0);

    const [postContent, setPostContent] = useState("");
    const [postIndex, setPostIndex] = useState(-1);

    const toggleWriteHidden = () => {
        setWriteHidden(!writeHidden);
        setTopProperty(window.scrollY);
    }

    const writeNewPost = () => {
        setPostContent("");
        setPostIndex(-1);
        toggleWriteHidden();
    }

    const editPost = (postIndex : any) => {
        setPostContent(props.posts[postIndex].content);
        setPostIndex(postIndex);
        toggleWriteHidden();
    }

    const savePost = () => {
        console.log("Post saved");
        if (postIndex === -1) {
        }
    }


    const handleEditorChange = (content :any, editor : any) => {
     setPostContent(content);
   }

    return (
        <div className="post-edit">
            <div className="post-options">
                <button className="escreverBt" onClick={writeNewPost}>escrever 
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} />
                </button>
            </div>
            { writeHidden === false &&
            <div className="post-create" style={{top: topProperty}}>
                <div className="popup-wrapper">
                    <div className="create-section">
                        <div className="section-subtitle">
                            <h1>escrever</h1>
                        </div>
                        <Editor
                            apiKey="adxsjb6lizs93r0q63jf1fp0glkkgwpslgia6bztougfcyon" 
                            initialValue={ postContent }
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
                            <button className="saveBt" onClick={ savePost }>guardar
                                <FontAwesomeIcon className="icon" icon={ faSave } />
                            </button>
                            <button className="closeBt" onClick={ toggleWriteHidden }>fechar
                                <FontAwesomeIcon className="icon" icon={ faTimes } />
                            </button>
                        </div>
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
