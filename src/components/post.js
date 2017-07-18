/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const Post = (props) => {
    // console.log('pr', props);
    return (
        <article className="posts__list__item">
            <h2 title={props.title}>{props.title}</h2>
            <span>{props.userInfo.name}</span>- 
            <span>{props.userInfo.company.name}</span>-  
            <span>{props.userInfo.address.city}</span>
            <p>{props.body}</p>
            <button>X</button>
        </article>
    )
};

export default Post

