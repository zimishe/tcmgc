/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const Post = (props) => {
    return (
        <article className="posts__list__item">
            <h2 title={props.title}>{props.title}</h2>
            <span>{props.userInfo.name}</span>- 
            <span>{props.userInfo.company.name}</span>-  
            <span>{props.userInfo.address.city}</span>
            <p>{props.body}</p>
            <button onClick={props.removePost.bind(this, props.id)}>X</button>
        </article>
    )
};

export default Post

