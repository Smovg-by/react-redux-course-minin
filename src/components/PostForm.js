import React from 'react'

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onSubmitHandler = event => {
    // чтобы не менялась страница при сабмите
    event.preventDefault()
    console.log(this.state)
    const { title } = this.state
    //новый объект для поста
    const newPost = {
      title,
      id: Date.now().toString()
    }
    console.log(newPost)
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
