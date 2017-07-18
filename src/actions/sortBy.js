/**
 * Created by eugene on 07/18/17.
 */

export function sortBy(e, that) {
    let criteria = e.target.value,
        displayedPosts = that.state.displayedPosts,
        users = that.state.users,
        postsToSet;

    displayedPosts.forEach(post => {
        let user = users.filter(user => parseInt(user.id, 10) === post.userId);

        switch (criteria) {
            case 'author' : post[criteria] = user[0].name;
                break;

            case 'city' : post[criteria] = user[0].address.city;
                break;

            case 'company' : post[criteria] = user[0].company.name;
                break;

            default:
        }
    });

    postsToSet = [...displayedPosts].sort((a, b) => a[criteria].localeCompare(b[criteria]));

    that.setState(() => {
        return {displayedPosts: postsToSet}
    });
}
