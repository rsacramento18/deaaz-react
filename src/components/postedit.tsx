import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Editor } from '@tinymce/tinymce-react';

const PostEdit = (props : any) => {

    const [escreverHidden, setEscreverHidden] = useState(true);
    const [topProperty, setTopProperty] = useState(0);

    const toggleEscreverHidden = () => {
        setEscreverHidden(!escreverHidden);
        setTopProperty(window.scrollY);

    }

    const handleEditorChange = (content :any, editor : any) => {
     console.log('Content was updated:', content);
   }

    return (
        <div className="post-edit">
            <div className="post-options">
                <button className="escreverBt" onClick={toggleEscreverHidden}>escrever 
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} />
                </button>
            </div>
            { escreverHidden === false &&
            <div className="post-create" style={{top: topProperty}}>
                <div className="popup-wrapper">
                    <div className="create-section">
                        <div className="section-subtitle">
                            <h1>escrever</h1>
                        </div>
                        <Editor
                            apiKey="adxsjb6lizs93r0q63jf1fp0glkkgwpslgia6bztougfcyon"
                            initialValue="<p>This is the initial content of the editor</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={handleEditorChange}
                        />
                        <div className="popup-buttons">
                            <button className="saveBt">guardar
                                <FontAwesomeIcon className="icon" icon={faSave} />
                            </button>
                            <button className="closeBt" onClick={toggleEscreverHidden}>fechar
                                <FontAwesomeIcon className="icon" icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            }
            { props.posts.map((post: any, index: number) => {
                return (
                    <div key={index}>
                        <div  className="post">
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
