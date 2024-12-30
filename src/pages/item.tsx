import '../App.css'
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Item() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Item Page description'
          data-rh='true'
          data-react-helmet='true'
        />
        <meta
          property='og:description'
          data-rh='true'
          data-react-helmet='true'
          content='Item Page og:description'
        />
        <meta property='og:site_name' content='Item Page og:site_name'
              data-rh='true'
              data-react-helmet='true'/>
        <meta property='og:title' content='Item Page og:title'
              data-rh='true'
              data-react-helmet='true'/>
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
          data-rh='true'
        />
        <title>Item Page</title>
      </Helmet>
      <h1>Item Page</h1>
      <Link to='/character'>to Character Page</Link>
    </>

  )
}

export default Item
