import React, { useEffect, useContext } from 'react';
import '../assets/css/feed.css';
import   { Context } from '../context';
import { NavLink } from 'react-router-dom';

const AsideRight = (props) => {
  const store = useContext(Context);

  useEffect(() => {
    document.getElementById('third-tt').innerHTML = `${store.articles[2].fields.trailText}..`;
    document.getElementById('fourth-tt').innerHTML = `${store.articles[3].fields.trailText}..`
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  let handleClick = (e) => {
    e.preventDefault();
    let index = Number(e.target.getAttribute('data-attribute-index'));
    store.setSelected(index);
  }

  return (
    <aside id='aside-right'>
      <div data-attribute-index={2} onClick={handleClick}>
        {props.loading ? null :
        <NavLink to='/Details' className='flex-column' data-attribute-index={2}>
        <div>
          <img src={store.articles[2].fields.thumbnail} className='thumb-img' alt='Latest story' data-attribute-index={2} />
          <h1 className='thumb-text' data-attribute-index={2}>{store.articles[2].fields.headline}</h1>
        </div>
        <p data-attribute-index={2} id='third-tt'></p>
      </NavLink>
      }
      </div>

      <div data-attribute-index={3} onClick={handleClick}>
        {props.loading ? null :
        <NavLink to='/Details' className='flex-column' data-attribute-index={3}>
          <img src={store.articles[3].fields.thumbnail} alt='Latest story' data-attribute-index={3}/>
          <div className='flex-column' data-attribute-index={3}>
            <h1 data-attribute-index={3}>{store.articles[3].fields.headline}</h1>
            <p data-attribute-index={3} id='fourth-tt'></p>
          </div>
        </NavLink>
        }
      </div>
    </aside>
  )
};

export default AsideRight;