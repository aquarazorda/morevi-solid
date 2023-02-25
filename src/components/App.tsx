import { FileRoutes, Routes } from 'solid-start';
import { bodyStyle } from '~/styles/common.css';
import { Header } from './Header';
import { Modal } from './Modal';

export const App = () => {
	console.log(process.env);
	return <div class={bodyStyle}>
		<Header />
		<Routes>
			<FileRoutes />
		</Routes>
		<Modal />
	</div>;
};