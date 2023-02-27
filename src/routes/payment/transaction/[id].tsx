import { useParams } from 'solid-start';

export default function TransactionPage() {
	const params = useParams();

	return <iframe src={`https://payze.io/pay/${params.id}/transaction`} height="1000px" width="100%" />;
}