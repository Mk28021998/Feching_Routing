// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    // console.log(updatedData)
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogsData
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info">
            <h1 className="title-text">{title}</h1>
            <div className="author-cont">
              <img src={avatarUrl} alt="author" className="author-img" />
              <p className="author-text">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-item-img" />
            <p className="content-text">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
