import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Helmet} from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='장비설명회 웹버전. 마지막 업뎃:24-12-31. UI/UX 수정'
        />
        <meta property='og:site_name' content='장비설명회 웹버전'/>
        <meta property='og:title' content='장비설명회 웹버전'/>
        <meta
          property='og:description'
          content='마지막 업뎃:24-12-31. UI/UX 수정'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
        />

        <title>(24-12-31) 장비 설명회2.Web</title>
      </Helmet>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
    </>

  )
}

export default App
