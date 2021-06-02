import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    // эта функция будет вызывать dispatch
  }

  onSubmitHandler = event => {
    // чтобы не менялась страница при сабмите
    event.preventDefault()

    const { title } = this.state
    if (!title.trim()) {
      return
    }
    //новый объект для поста
    const newPost = {
      title,
      id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({ title: '' })
  }
  //создадим универальную функцию-обработчик инпутов. Она передает
  // в стейт данные при изменении содержимого поля, затем в поле state мы
  //вставляем данные из стейта
  changeInputHandler = event => {
    this.setState(prev => ({
      ...prev,
      ...{ [event.target.name]: event.target.value }
    }))
  }

  render () {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Заголовок поста</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Создать
        </button>
      </form>
    )
  }
}

//создадим функцию, которая будет мапить диспатчи
const mapDispatchToProps = {
  createPost
  //можно написать так:
  // createPost: cretePost
}

export default connect(null, mapDispatchToProps)(PostForm)
