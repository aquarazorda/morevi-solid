import { useI18n } from '@solid-primitives/i18n';
import { Title } from "solid-start";

export default function Home() {
  const [t] = useI18n();
  return (
    <main>
      <Title>Morevi.ge</Title>
    </main>
  );
}
