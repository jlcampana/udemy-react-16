import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    //No sería mejor crear servicios y llamarlos desde este método?????
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data.slice(0, 4).map(post => {
          return { ...post, author: 'Fistro' }
        })

        this.setState({ posts })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />
    })

    return (
      <div>
        <section className="Posts">{posts}</section>
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
