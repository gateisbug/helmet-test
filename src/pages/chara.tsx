import '../App.css'
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

// export const getStaticProps = () => ({
//   meta: {
//     title: '(24-12-31) 함순이 리스트.Web',
//     description: '함순이 리스트. 마지막 업뎃:24-12-31. 함순이 리스트 추가',
//     ogImage: 'https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png',
//   },
// });

function App2() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Character Page description'
        />
        <meta
          property='og:description'
          content='Character Page og:description'
        />
        <meta property='og:site_name' content='Character Page og:site_name'/>
        <meta property='og:title' content='Character Page og:title'/>
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
        />

        <title>Character Page</title>
      </Helmet>
      <h1>Character Page</h1>
      <Link to='/item'>to Item Page</Link>
    </>
  )
}

export default App2
