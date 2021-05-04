import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../context';
import { observer } from 'mobx-react-lite';
import NotFound from './NotFound';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import Comment from './Comment';
import logo  from '../assets/imgs/logo.png';
import comment from '../assets/imgs/comment.png';
import '../assets/css/feed.css';
import '../assets/css/details.css';
import '../assets/css/error.css';


const Details = observer(function Details() {
  const store = useContext(Context);
  
  useEffect(() => {
    if (store.selected.fields) {
      document.getElementById('article-body').innerHTML = store.selected.fields.body;
    }
  }) // eslint-disable-line react-hooks/exhaustive-deps
  

  let str = store.selected.fields  ? store.selected.webPublicationDate.split('T')[0] : '';

  return (
    <main id={store.selected.fields ? 'home' : 'flex'} className={store.selected.fields ? 'details-container' : ''}>
      {store.selected.fields ? <AsideLeft /> : null }
      {store.selected.fields ? 
      <section id='feed-container'>
        <div id='feed' className='details'>
          <img src={store.selected.fields.thumbnail} className='news-thumbnail' alt='News thumbnail' />
          {store.index <= 5 ? <h2 className='pink-heading'>LATEST</h2> : null}
          <div id='article-body'></div>

          <div className='publication-deets'>
            <img src={logo} alt='Author' />
            <div>
              <h2>TheObserver</h2>
              <p>{str}</p>
            </div>
          </div>
          <Comment />
        </div>

        <a href ='#comment-container'><img src={comment} alt='Comment' id='comment-icon' /></a>
      </section>
      :
      <NotFound />
      }
      {store.selected.fields ? <AsideRight /> : null }
    </main>
  )
})

export default Details;
