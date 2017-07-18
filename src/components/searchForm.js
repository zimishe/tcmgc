/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const SearchForm = (props) => {
    return (
        <label>Quick search by post title
            <input type="text" placeholder="search" onKeyUp={props.onKeyUp} />
        </label>
    )
};

export default SearchForm