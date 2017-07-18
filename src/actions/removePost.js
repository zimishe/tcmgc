/**
 * Created by eugene on 07/18/17.
 */

export function removePost(id, that) {
    let postsToSet = [...that.state.displayedPosts].filter(post => post.id !== id);

    that.setState(() => {
        return {displayedPosts: postsToSet}
    });
}