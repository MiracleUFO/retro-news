import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context';
import { observer } from 'mobx-react-lite';
import '../assets/css/feed.css';
import '../assets/css/comments.css';

const Comment = observer(function Comment() {
  const store = useContext(Context);

  const [state, setState] = useState({
    id: store.index,
    commentVal: '',
    comments: []
  })

  useEffect(() => {
    /*if(state.comments.length !== 0) {
      let li = `<li>${state.comments[state.comments.lenght - 1]}</li>`;
      console.log(state.comments, li, state.comments[state.comments.lenght - 1]);
      document.getElementById('comments').appendChild(li)
    }*/
  }, [state.comments])

  let handleChange = (e) => {
    setState({...state, commentVal: e.target.value})
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if(state.commentVal) {
      state.comments.push(state.commentVal); console.log(state.comments)
    }
  }

  return (
    <section id='comment-container'>
      <h1>Comment</h1>
      <ul id='comments'>
        <li>Really nice piece</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea value={state.commentVal} onChange={handleChange} />
        <button className={state.commentVal ? 'button-active' : ''}>Submit</button>
      </form>
    </section>
  )
})

export default Comment;