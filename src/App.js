import React, { Component } from 'react'
import './App.css'
import postsData from './data/posts.json'
import usersData from './data/users.json'
import PostList from './components/postList'

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
        let users,
            postsToSet = [],
            userIDs;
        
        switch (criteria) {
            case 'city' :
                users = this.state.users
                    .filter(user => user.address.city === e.target.value);
            break;
            
            case 'company' :
                users = this.state.users
                    .filter(user => user.company.name === e.target.value);
            break;
        }
        
        userIDs = users.map(user => parseInt(user.id, 10));
        
        userIDs.forEach(id => {
           let post = this.state.posts.filter(post => post.userId === id);
           postsToSet.push(post);
        });
        
        this.setState(() => {
            return {displayedPosts: postsToSet[0]}
        })
    };
    
    searchPosts = (e) => {
        let valueToSearch = e.target.value.toLowerCase(),
            posts = this.state.posts;
        
        let postsToSet = posts.filter(post => post.title.toLowerCase().indexOf(valueToSearch) !== -1);
        
        this.setState(() => {
            return {displayedPosts: postsToSet}
        })
    };
    
    render() {
        let cities = [...new Set(this.state.users.map(user => user.address.city))],
            companies = [...new Set(this.state.users.map(user => user.company.name))],
            authors = [...new Set(this.state.users.map(user => user.name))];
        
        return (
            <div className="posts">
                <h1>Posts</h1>
                
                <nav>
                    <label>City filter:
                        <select onChange={this.filterBy.bind(this, 'city')}>
                            {cities.map((city, i) =>
                                <option key={i}>
                                    {city}
                                </option>
                            )}
                        </select>
                    </label>
                    <label>Company filter:
                        <select onChange={this.filterBy.bind(this, 'company')}>
                            {companies.map((company, i) =>
                                <option key={i}>
                                    {company}
                                </option>
                            )}
                        </select>
                    </label>
                    <label>Quick search by post title
                        <input type="text" placeholder="search" onKeyUp={this.searchPosts}/>
                    </label>
                    <hr/>
                    <label>Sort by:
                        <select>
                            <option value="author">Author name</option>
                            <option value="city">City name</option>
                            <option value="company">Company name</option>
                        </select>
                    </label>
                </nav>
                <PostList data={this.state} />
            </div>
        )
    }
}

export default App
