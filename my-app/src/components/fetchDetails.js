import React, { Component } from 'react'
import './fetchDetails.css';

class FetchDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://finalspaceapi.com/api/v0/character';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts });
    }
    
    render() {
        const { posts } = this.state;
        
        return (
              <>
              <h1 className='heading'>Final Space React API Assignment</h1>
            <div className='content-container'>
                {posts && posts.length && posts.map(post => <div  key={post.id}>
                 <div className='finalSpace'>
                        <div className='img-container'>
                              <img src={post.img_url} alt={post.name} />
                        </div> 
                 
                        <div className='info'>
                              <span className='number'>{post.id}</span>      
                        </div>
                        <h3 className='name'>{post.name}</h3> 
                 
                        <div className='gender-box'>
                              {post.gender}
                        </div>

                        <div className='info'>
                            <small className='type'>{post.species}</small>                             
                        </div>

                  </div>                        
                      
                  </div>)}
            </div>
            </>
        )
    }
}

export default FetchDetails
