import React, { useState } from 'react';
import PostEdit from '../components/postedit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Alias = (props: any) => {

    const plusLogo = <FontAwesomeIcon icon={faPlusCircle} />
    const minusLogo = <FontAwesomeIcon icon={faMinusCircle} />
    const deleteLogo = <FontAwesomeIcon icon={faTrashAlt} />

    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div key={props.index} className="alias">
            <div className="alias-settings">
                <div className="alias-letter">
                    <span>{props.alias.letter}</span>
                </div>
                <div className="alias-color" style={{backgroundColor: props.alias.color}}>
                </div>
                <div className="alias-description">
                    <span>{props.alias.description}</span>
                </div>
                <div className="alias-options">
                    { isHidden ?
                        <span className="minusBt" onClick={toggleHidden}>{ minusLogo }</span>
                    :
                        <span className="moreBt" onClick={toggleHidden}>{ plusLogo }</span>
                    }
                    <span className="deleteBt">{ deleteLogo }</span>
                </div>
            </div>
            { isHidden === true &&
                <div key={props.index} className="alias-posts">
                    <PostEdit key={props.alias.index} posts={props.alias.posts}/>
                </div>
            }
        </div>

    )

}
export default Alias;
