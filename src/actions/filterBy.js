/**
 * Created by eugene on 07/18/17.
 */

export function filterBy(criteria, e, that) {
    let users,
        postsToSet = [],
        userIDs;

    switch (criteria) {
        case 'city' :
            users = [...that.state.users]
                .filter(user => user.address.city === e.target.value);

            break;

        case 'company' :
            users = [...that.state.users]
                .filter(user => user.company.name === e.target.value);
            break;
            
        default:
    }

    userIDs = users.map(user => parseInt(user.id, 10));

    userIDs.forEach(id => {
        let post = [...that.state.posts].filter(post => post.userId === id);
        postsToSet.push(post);
    });

    that.setState(() => {
        return {displayedPosts: postsToSet[0]}
    });
}