import { useState } from 'react'
import './App.css'
import {Helmet} from 'react-helmet-async';

function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='함순이 리스트. 마지막 업뎃:24-12-31. 함순이 리스트 추가'
        />
        <meta property='og:site_name' content='함순이 리스트' />
        <meta property='og:title' content='함순이 리스트' />
        <meta
          property='og:description'
          content='마지막 업뎃:24-12-31. 함순이 리스트 추가'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
        />

        <title>(24-12-31) 함순이 리스트.Web</title>
      </Helmet>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App2
