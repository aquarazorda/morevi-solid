import { useI18n } from "@solid-primitives/i18n";
import { Title } from "solid-start";
import { Catalogue } from "~/components/Catalogue/Catalogue";

export default function Home() {
	const [t] = useI18n();
	return (
		<main>
			<Title>Morevi.ge</Title>
			<Catalogue />
		</main>
	);
}
