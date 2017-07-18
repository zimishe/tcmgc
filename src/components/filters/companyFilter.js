/**
 * Created by eugene on 07/18/17.
 */

import React from 'react'

const CompanyFilter = (props) => {
    return (
        <label>Company filter:
            <select defaultValue='placeholder'
                    onChange={props.onChange}>
                <option value='placeholder' disabled>select a company</option>
                {props.companies.map((company, i) =>
                    <option key={i}>
                        {company}
                    </option>
                )}
            </select>
        </label>
    )
};

export default CompanyFilter