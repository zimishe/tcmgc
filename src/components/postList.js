/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'
import Post from './post'

const PostList = (data) => {
    let posts = data.data.displayedPosts,
        users = data.data.users;
    
    return (
        <div className="posts__list">
            {posts.map((post, i) =>
                <Post key={i}
                      title={post.title}
                      id={post.id}
                      body={post.body}
                      userId={post.userId}
                      userInfo={users.filter(user => parseInt(user.id, 10) === post.userId)[0]}
                      removePost={data.removePost}
                />
            )}
        </div>
    )
};

export default PostList