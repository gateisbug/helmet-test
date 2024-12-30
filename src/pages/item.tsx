import '../App.css'
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

// export const getStaticProps = () => ({
//   meta: {
//     title: '(24-12-31) 장비 설명회2.Web',
//     description: '장비설명회 웹버전. 마지막 업뎃:24-12-31. UI/UX 수정',
//     ogImage: 'https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png',
//   },
// });

function App() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Item Page description'
        />
        <meta
          property='og:description'
          content='Item Page og:description'
        />
        <meta property='og:site_name' content='Item Page og:site_name'/>
        <meta property='og:title' content='Item Page og:title'/>
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
        />

        <title>Item Page</title>
      </Helmet>
      <h1>Item Page</h1>
      <Link to='/character'>to Character Page</Link>
    </>

  )
}

export default App
