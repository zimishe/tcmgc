/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const SortBy = (props) => {
    return (
        <label>Sort by:
            <select defaultValue='placeholder' onChange={props.onChange}>
                <option value='placeholder' disabled>sort by</option>
                <option value="author">Author name</option>
                <option value="city">City name</option>
                <option value="company">Company name</option>
            </select>
        </label>
    )
};

export default SortBy