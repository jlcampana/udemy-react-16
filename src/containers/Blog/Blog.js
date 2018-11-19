import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  componentDidMount() {
    //No sería mejor crear servicios y llamarlos desde este método?????
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
