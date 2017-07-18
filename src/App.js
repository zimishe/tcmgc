import React, { Component } from 'react'
import './App.css'
import postsData from './data/posts.json'
import usersData from './data/users.json'
import PostList from './components/postList'

import { filterBy } from './actions/filterBy'
import { searchPosts } from './actions/searchPosts'
import { sortBy } from './actions/sortBy'
import { removePost } from './actions/removePost'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: postsData,
            users: usersData,
            displayedPosts: postsData
        }
    }
    
    filterBy = (criteria, e) => {
        filterBy(criteria, e, this);
    };
    
    searchPosts = (e) => {
        searchPosts(e, this);
    };
    
    sortBy = (e) => {
        sortBy(e, this);
    };
    
    removePost = (id) => {
        removePost(id, this);
    };
    
    render() {
        let cities = [...new Set(this.state.users.map(user => user.address.city))],
            companies = [...new Set(this.state.users.map(user => user.company.name))];
        
        return (
            <div className="posts">
                <h1>Posts</h1>
                
                <nav>
                    <label>City filter:
                        <select defaultValue='placeholder'
                                onChange={this.filterBy.bind(this, 'city')}>
                                    <option value='placeholder' disabled>chose a city</option>
                                        {cities.map((city, i) =>
                                            <option key={i}>
                                                {city}
                                            </option>
                                        )}
                        </select>
                    </label>
                    <label>Company filter:
                        <select defaultValue='placeholder' 
                                onChange={this.filterBy.bind(this, 'company')}>
                                    <option value='placeholder' disabled>select a company</option>
                                        {companies.map((company, i) =>
                                            <option key={i}>
                                                {company}
                                            </option>
                                        )}
                        </select>
                    </label>
                    <label>Quick search by post title
                        <input type="text" placeholder="search" onKeyUp={this.searchPosts} />
                    </label>
                    <hr/>
                    <label>Sort by:
                        <select defaultValue='placeholder' onChange={this.sortBy}>
                            <option value='placeholder' disabled>sort by</option>
                            <option value="author">Author name</option>
                            <option value="city">City name</option>
                            <option value="company">Company name</option>
                        </select>
                    </label>
                </nav>
                <PostList data={this.state} removePost={this.removePost} />
            </div>
        )
    }
}

export default App
