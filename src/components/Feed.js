import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import   { Context } from '../context';
import { observer } from 'mobx-react-lite';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import logo  from '../assets/imgs/logo.png';
import preloader from '../assets/imgs/preloader.gif';
import '../assets/css/feed.css';

const Feed = observer(function Feed() {
  const store = useContext(Context);

  const [state, setState] = useState({
    loading: true,
    articles: [],
  })

  useEffect(() => {
    fetch("https://content.guardianapis.com/search?tag=lifeandstyle/fashion&from-date=2012-01-01&to-date=2021-04-07&order-by=newest&show-fields=all&page-size=200&api-key=4fbea54e-0e35-4618-a685-1813a4ab34b3", {
      "method": "GET",
      "headers": {
      "content-type": "application/x-www-form-urlencoded",
      }
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then((data) => {
        store.addArticles(data.response.results);
        setState({...state, articles: [...data.response.results], loading: false});
      });
    })
    .catch((err) => {
      console.log(`Fetch Error: ${err}`);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  let handleClick = (e) => {
    e.preventDefault();
    let index = Number(e.target.getAttribute('data-attribute-index'));
    store.setSelected(index);
  }

  return (
    <main id={state.loading ? 'flex' : 'home'}>
      {state.loading ? <img src={preloader} id='preloader' alt='Spinning wheel preloader' /> : null}
      {state.loading ? null : <AsideLeft loading={state.loading} />} 
      
      {state.loading ? null :
      <Splide id='feed'
        options={ {
          autoplay : true,
          interval : 3000,
          speed : 500,
          rewind : true,
          rewindSpeed: 1500,
          perPage : 1,
          pauseOnHover : false,
          pauseOnFocus : false, 
          easing : 'ease',
          gap    : '1rem',
        } }
      >
        {state.articles.map((item, index) => {
          let str = item.webPublicationDate.split('T')[0];
          return (
            <SplideSlide key={index} data-attribute-index={index}>              
            <div onClick={handleClick} data-attribute-index={index}>
              <NavLink to='/Details' data-attribute-index={index}>
                <img src={item.fields.thumbnail} className='news-thumbnail' alt='News thumbnail' data-attribute-index={index} />
                {index <= 5 ? <h2 className='pink-heading'>LATEST</h2> : null}
                <h1 data-attribute-index={index}>{item.fields.headline}</h1>
                <p data-attribute-index={index}>{item.fields.trailText}... <span className='greyText'>see more</span></p>
                

                <div className='publication-deets' data-attribute-index={index}>
                  <img src={logo} alt='Author' data-attribute-index={index}/>
                  <div data-attribute-index={index}>
                    <h2 data-attribute-index={index}>TheObserver</h2>
                    <p data-attribute-index={index}>{str}</p>
                  </div>
                </div>
              </NavLink>
              </div>
            </SplideSlide>
          ) ;
        })}
      </Splide>}

      {state.loading ? null :
      <section className='secondary-feed'>
        <h1>Latest stories</h1>
        {state.articles.map((item, index) => {
          if (index <= 5) {
            return (
              <div key={index} data-attribute-index={index} onClick={handleClick}>
                <NavLink to='/Details' data-attribute-index={index}>
                  <img src={item.fields.thumbnail} alt='Latest story' data-attribute-index={index} />
                  <h2 data-attribute-index={index}>{item.fields.headline}</h2>
                </NavLink>
              </div>
            )
          } else return null
        })}
      </section>
      }

      {state.loading ? null : <AsideRight loading={state.loading} />}
    </main>
  )
})

export default Feed;