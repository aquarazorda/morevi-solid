import { FileRoutes, Routes } from 'solid-start';
import { bodyStyle } from '~/styles/common.css';
import { Header } from './Header/Header';

export const App = () => {
  return <div class={bodyStyle}>
    <Header />
    <Routes>
      <FileRoutes />
    </Routes>
  </div>
}