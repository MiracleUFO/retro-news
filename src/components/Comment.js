import React, { useState, useEffect } from "react";
import "../assets/css/feed.css";
import "../assets/css/comments.css";
import firebase from "../config/firebase";

const Comment = (props) => {

  const [state, setState] = useState({
    comments: [],
    commentVal: ""
  });

  useEffect(() => {
    if (props.index !== undefined || props.index !== null) {
      document.getElementById("comments").innerHTML = null; //Removes previous comments inserted before rerender
      
      firebase.getComments(props.index).then((data) => { //Gets & displays comments for specific news-deets
        data.forEach((comment) => {
          let commentArr = [...state.comments, comment.data().comment];
          setState({ ...state, comments: commentArr, commentVal: "" });
        });
      });
    }
    console.log(props.index)
  }, [props.index]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (state.comments.length !== 0) {
      let li = `<li><p>${
        state.comments[state.comments.length - 1]
      }</p><span>Anonymous</span></li>`;
      document.getElementById("comments").innerHTML = document.getElementById("comments").innerHTML + li;
    }
  }, [state.comments]);

  let handleChange = (e) => {
    setState({ ...state, commentVal: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (state.commentVal) {
      let commentArr = [...state.comments, state.commentVal];
      setState({ ...state, comments: commentArr, commentVal: "" });
      firebase.createComment({articleId: props.index, comment: state.commentVal});
    }
  };

  return (
    <section id="comment-container">
      <h1>Comment</h1>
      <ul id="comments">
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea value={state.commentVal} onChange={handleChange} />
        <button className={state.commentVal ? "button-active" : ""}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Comment;