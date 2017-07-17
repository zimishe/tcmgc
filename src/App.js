import React, { Component } from 'react'
import './App.css'
import postsData from './data/posts.json'
import usersData from './data/users.json'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: 1,
            posts: '228'
        }
    }
    
    setUser = (user) => {
        this.setState(() => {
            return {users: user}
        })
    };
    
    
    render() {
        
        
        return (
            <div className="posts">
                <h1>Posts{this.state.users}</h1>
                
                <nav>
                    <label>City filter:
                        <select onChange={this.setUser.bind(this, 3000)}>
                            <option>100</option>
                            <option>200</option>
                        </select>
                    </label>
                    <label>Company filter: </label>
                    <label>Quick search by post title</label>
                    <hr/>
                    <label>Sort by: </label>
                </nav>
            </div>
        )
    }
}

export default App
