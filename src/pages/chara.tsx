import '../App.css'
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Character() {
  return (
    <>
      <Helmet>
        <title>Character Page</title>
        <meta
          name='description'
          content='Character Page description'
          data-rh='true'
          data-react-helmet="true"
        />
        <meta
          property='og:description'
          content='Character Page og:description'
          data-rh='true'
          data-react-helmet="true"
        />
        <meta property='og:site_name' content='Character Page og:site_name'
              data-rh='true'
              data-react-helmet="true"/>
        <meta property='og:title' content='Character Page og:title'
              data-rh='true'
              data-react-helmet="true"/>
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
          data-rh='true'
        />
      </Helmet>
      <h1>Character Page</h1>
      <Link to='/item'>to Item Page</Link>
    </>
  )
}

export default Character
