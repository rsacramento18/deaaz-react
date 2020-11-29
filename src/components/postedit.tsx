import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const PostEdit = (props : any) => {

    const plusLogo = <FontAwesomeIcon icon={faPlusCircle} />

    return (
        <div className="post-edit">
            { props.posts.map((post: any, index: number) => {
                return (
                    <div key={index}>
                        <div className="post-options">
                            <button className="escreverBt">escrever 
                                <FontAwesomeIcon className="iconPlus" icon={faPlusCircle} />
                            </button>
                        </div>
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
