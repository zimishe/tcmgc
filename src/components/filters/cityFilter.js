/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const CityFlter = (props) => {
    return (
        <label>City filter:
            <select defaultValue='placeholder'
                    onChange={props.onChange}>
                <option value='placeholder' disabled>chose a city</option>
                {props.cities.map((city, i) =>
                    <option key={i}>
                        {city}
                    </option>
                )}
            </select>
        </label>
    )
};

export default CityFlter