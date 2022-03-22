import React, { Component } from 'react';
import '../css/styles.css'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[],
            isLoading:false
        }
    }

    componentDidMount(){
        this.fetchPosts()
    }

   async fetchPosts(){
      var res =  await axios.get('http://localhost:9000/api/v1/posts')
      console.log("Posts Response",res);
      this.setState({isLoading:false,posts:res.data.posts})
    }
    
    render() {
        const{isLoading,posts}=this.state
        if(isLoading) return <div>Loading</div>
        return (
            <div className="custom">
                Hello home from React Updated
                <div>
                    <img src={require('../assets/images/folder.jpg')} alt="None"/>
                </div>
                {posts.map((post,key)=><div key={key}>{post.title}</div>)}
            </div>
        );
    }
}


export default Home