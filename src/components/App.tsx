import { FileRoutes, Routes } from 'solid-start';
import { bodyStyle } from '~/styles/common.css';
import { Header } from './Header';
import { Modal, ModalOverlay } from './Modal';

export const App = () => {
	return <div class={bodyStyle}>
		<Header />
		<Routes>
			<FileRoutes />
		</Routes>
		<Modal />
		<ModalOverlay />
	</div>;
};