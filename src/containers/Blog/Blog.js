import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: undefined
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

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      )
    })

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
