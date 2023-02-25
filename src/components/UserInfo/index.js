import './index.css'

const UserInfo = props => {
  const {blog} = props
  const {publishedDate, description, title} = blog
  return (
    <li className="blog-item">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="date">{publishedDate}</p>
    </li>
  )
}

export default UserInfo
