import React, { Component } from 'react'
import './App.css'
import postsData from './data/posts.json'
import usersData from './data/users.json'
import PostList from './components/postList'
import CityFilter from './components/filters/cityFilter'
import CompanyFilter from './components/filters/companyFilter'
import SearchForm from './components/searchForm'
import SortBy from './components/filters/sortBy'

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
                    <CityFilter onChange={this.filterBy.bind(this, 'city')} 
                                cities={cities}
                    />
                    <CompanyFilter onChange={this.filterBy.bind(this, 'company')}
                                   companies={companies}
                    />
                    <SearchForm onKeyUp={this.searchPosts} />
                    <hr/>
                    <SortBy onChange={this.sortBy} />
                </nav>
                <PostList data={this.state} removePost={this.removePost} />
            </div>
        )
    }
}

export default App
