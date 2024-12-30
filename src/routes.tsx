import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import RootLayout from './layout.tsx';
import Item from './pages/item.tsx';
import Character from './pages/chara.tsx';

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Navigate to='item' replace />} />
    <Route path='/item' element={<Item />} />
    <Route path='/character' element={<Character />} />
  </Route>,
)

const router = createBrowserRouter(routes, {
  basename: '/',
})

export default router