// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, title, avatarUrl, author, topic} = blogDetails
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`}>
        <div className="blog-item-cont">
          <img
            src={imageUrl}
            alt={`item${id}`}
            className="blog-item-imageUrl"
          />
          <div className="blog-info-cont">
            <p className="topic-text">{topic}</p>
            <h1 className="title-and-author-text">{title}</h1>
            <div className="author-info-cont">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
              <p className="title-and-author-text">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
