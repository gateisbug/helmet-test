import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import RootLayout from './layout.tsx';
import App from './App.tsx';
import App2 from './App2.tsx';

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Navigate to='item' replace />} />
    <Route path='item' element={<App />} />
    <Route path='chara' element={<App2 />} />
  </Route>,
)

const router = createHashRouter(routes, {
  basename: '/',
})

export default router