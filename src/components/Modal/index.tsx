import { createSignal, JSX, Show } from 'solid-js';
import { modalOverlay, modalWrapper } from './Modal.css';

type ModalState = {
  isOpen: boolean;
  body?: JSX.Element;
}

const [modalState, setModalState] = createSignal<ModalState>({
	isOpen: false,
});

export const Modal = () => {
	return (
		<Show when={modalState().isOpen}>
			<div class={modalWrapper}>
				{modalState().body}
			</div>
			<ModalOverlay />
		</Show>
	);
};

export const ModalOverlay = () => <div class={modalOverlay} onClick={() => closeModal()} />;

export const showModal = (body: JSX.Element) => {
	setModalState({ isOpen: true, body });
};

export const closeModal = () => {
	setModalState({ isOpen: false });
};