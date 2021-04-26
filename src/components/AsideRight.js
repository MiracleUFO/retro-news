import React, { useContext } from 'react';
import '../assets/css/feed.css';
import   { Context } from '../context';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const AsideRight = observer(function Feed(props) {
  const store = useContext(Context);

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
        <p data-attribute-index={2}>{store.articles[2].fields.trailText}...</p>
      </NavLink>
      }
      </div>

      <div data-attribute-index={3} onClick={handleClick}>
        {props.loading ? null :
        <NavLink to='/Details' className='flex-column' data-attribute-index={3}>
          <img src={store.articles[3].fields.thumbnail} alt='Latest story' data-attribute-index={3}/>
          <div className='flex-column' data-attribute-index={3}>
            <h1 data-attribute-index={3}>{store.articles[3].fields.headline}</h1>
            <p data-attribute-index={3}>{store.articles[3].fields.trailText}..</p>
          </div>
        </NavLink>
        }
      </div>
    </aside>
  )
})

export default AsideRight;