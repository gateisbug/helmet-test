import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import RootLayout from './layout.tsx';
import App from './pages/item.tsx';
import App2 from './pages/chara.tsx';

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Navigate to='item' replace />} />
    <Route path='item' element={<App />} />
    <Route path='character' element={<App2 />} />
  </Route>,
)

const router = createHashRouter(routes, {
  basename: '/',
})

export default router