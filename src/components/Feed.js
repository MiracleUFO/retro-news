import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import logo  from '../assets/imgs/logo.png';
import preloader from '../assets/imgs/preloader.gif';
import '../assets/css/feed.css';


const Feed = observer(({store}) => {

  const [state, setState] = useState({
    preloader: true,
    articles: []
  })

  useEffect(() => {
    fetch("http://content.guardianapis.com/search?tag=lifeandstyle/fashion&from-date=2012-01-01&to-date=2021-04-07&order-by=newest&show-fields=all&page-size=200&api-key=4fbea54e-0e35-4618-a685-1813a4ab34b3", {
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
        setState({...state, articles: [...data.response.results], preloader: false});
        store.addArticles(...data.response.results);
      });
    })
    .catch((err) => {
      console.log(`Fetch Error: ${err}`);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main id={state.preloader ? 'flex' : 'home'}>
      {state.preloader ? <img src={preloader} id='preloader' alt='Spinning wheel preloader' /> : null}
      {state.preloader ? null : <AsideLeft />}
      <NavLink to='/Details' id='feed-container'>
        <Splide 
        id='feed'
        options={{
          easing: 'ease',
          autoplay: true,
          interval: 5000,
          rewind: true, 
          arrows: false,
          perPage: 1
        }}
        >
          {state.articles.map((item, index) => {

            let s = item.webPublicationDate.split('T')[0];
            return (

              <SplideSlide key={index}>
                <img src={item.fields.thumbnail} className='news-thumbnail' alt='News thumbnail' />
                {index <= 5 ? <h2 className='pink-heading'>LATEST</h2> : null}
                <h1>{item.fields.headline}</h1>
                <p>{item.fields.trailText}... <span className='greyText'>see more</span></p>

                <div className='publication-deets'>
                  <img src={logo} alt='Author' />
                  <div>
                    <h2>TheObserver</h2>
                    <p>{s}</p>
                  </div>
                </div>
              </SplideSlide>
            ) ;
          })}
        </Splide>
      </NavLink>
      {state.preloader ? null : <AsideRight />}
    </main>
  )
})


export default Feed;