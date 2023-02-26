import { useI18n } from '@solid-primitives/i18n';
import { Catalogue } from '~/components/Catalogue/Catalogue';

export default function Home() {
	const [t] = useI18n();
	

	return <Catalogue />;
}
