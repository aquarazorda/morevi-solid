import { flexCentered } from '~/styles/common.css';
import { SearchIcon } from '~/styles/icons/SearchIcon';
import { btn } from '~/styles/button.css';
import { headerWrapper, logoWrapper } from './header.css';
import { useI18n } from '@solid-primitives/i18n';
import { ShoppingCart } from '~/styles/icons/ShoppingCart';
import { A } from '@solidjs/router';
import { showModal } from '../Modal';
import { Auth } from '../Auth/Auth';
import { useNavigate } from 'solid-start';
import { setThemeMode, themeMode } from '~/root';

export const Header = () => {
	const [t] = useI18n();
	const navigate = useNavigate();

	const toggleTheme = () => {
		setThemeMode(prev => {
			localStorage.setItem('color-schema', prev === 'dark' ? 'light' : 'dark');
			return prev === 'dark' ? 'light' : 'dark';
		});
	};
	
	return <div class={headerWrapper}>
		<A href='/' class={logoWrapper}>
			<img src="/images/logo.png" alt="logo" />
		</A>
		<div class={flexCentered}>
			<button class={btn.plain} aria-label={t('search')}>
				<SearchIcon />
			</button>
			<button class={btn.black} onClick={() => navigate('/admin')}>{t('categories')}</button>
			<button class={btn.plain}>{t('sort_by')}</button>
			<button class={btn.black} onClick={() => showModal(Auth)}>{t('sign_in')}</button>
			<button class={btn.plain} aria-label={t('shopping_cart')} onClick={() => navigate('/cart')}>
				<ShoppingCart />
			</button>
			<button class={btn.plain} onClick={() => toggleTheme()} aria-label={t('theme')}>
				{themeMode() === 'dark' ? '🌑' : '🌕'}
			</button>
		</div>
	</div>;
};