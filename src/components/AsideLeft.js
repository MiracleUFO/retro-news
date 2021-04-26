import React, { useContext } from 'react';
import '../assets/css/feed.css';
import   { Context } from '../context';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const AsideLeft = observer(function Feed(props) {
  const store = useContext(Context);

  let handleClick = (e) => {
    e.preventDefault();
    let index = Number(e.target.getAttribute('data-attribute-index'));
    store.setSelected(index);
    console.log(store.selected);
  }

  return (
    <aside id='aside-left'>
        <div data-attribute-index={0} onClick={handleClick}>
          {props.loading ? null :
          <NavLink to='/Details' className='flex-column' data-attribute-index={0}>
            <img src={store.articles[0].fields.thumbnail} alt='Latest story' data-attribute-index={0}/>
            <div className='flex-column' data-attribute-index={0}>
              <h1 data-attribute-index={0}>{store.articles[0].fields.headline}</h1>
              <p data-attribute-index={0}>{store.articles[0].fields.trailText}..</p>
            </div>
          </NavLink>
          }
        </div>
      
        <div data-attribute-index={1} onClick={handleClick}>
          {props.loading ? null :
          <NavLink to='/Details' className='flex-column' data-attribute-index={1}>
          <div>
            <img src={store.articles[1].fields.thumbnail} className='thumb-img' alt='Latest story' data-attribute-index={1} onClick={props.handleClick} />
            <h1 className='thumb-text' data-attribute-index={1}>{store.articles[1].fields.headline}</h1>
          </div>
          <p data-attribute-index={1}>{store.articles[1].fields.trailText}...</p>
        </NavLink>
        }
        </div>
    </aside>
  )
})

export default AsideLeft;