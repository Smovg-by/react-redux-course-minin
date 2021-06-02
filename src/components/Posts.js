import Post from '../components/Post'
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className='text-center'>Постов пока нет</p>
  }
  return syncPosts.map(post => {
    return <Post post={post} key={post.id} />
  })
}
//с помощью этой функции мы можем конвертировать Стейт в нужный пропс
const mapStateToProps = props => {
  console.log(props.posts.posts)
  return {
    syncPosts: props.posts.posts
  }
}

// функция connect() подключает компонент к стору. Возвращает новую законнекченную компоненту
export default connect(mapStateToProps, null)(Posts)
