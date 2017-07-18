/**
 * Created by eugene on 07/18/17.
 */

export function searchPosts(e, that) {
    let valueToSearch = e.target.value.toLowerCase(),
        posts = that.state.posts;

    let postsToSet = posts.filter(post => post.title.toLowerCase().indexOf(valueToSearch) !== -1);

    that.setState(() => {
        return {displayedPosts: postsToSet}
    })
}