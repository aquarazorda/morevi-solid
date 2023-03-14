// import { Accessor, createSignal, For, Show } from 'solid-js';
// import { sps } from '~/styles/sprinkles.css';
// import { btn } from '~/styles/button.css';
// import { createStore } from 'solid-js/store';
// import { useI18n } from '@solid-primitives/i18n';

// type HTMLInputTypeAttribute = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime' | 'datetime-local' | 'month' | 'week' | 'color' | 'range' | 'file' | 'image' | 'submit' | 'reset' | 'button';

// export type FormInput = {
//   name: string,
//   label: string,
//   type: HTMLInputTypeAttribute,
//   value?: string | number | string[],
// }

// type FormProps<T extends object> = {
//   schema: Decoder<T, T>
//   inputs: FormInput[],
//   column?: boolean,
//   onSubmit: (values: Validation<Accessor<T>>) => void,
// }

// export const Form = <T extends object,>(props: FormProps<T>) => {
// 	const [formData, setFields] = createStore<T>({} as T);
// 	const [formErrors, setFormErrors] = createSignal<string[]>([]);
// 	const [l] = useI18n();

// 	const onSubmit = async (e: Event) => {
// 		e.preventDefault();
// 		const values = props.schema.decode(formData);
		
// 		// fold(
// 		// 	(errors: Errors) => setFormErrors(PathReporter.report(errors)),
// 		// 	() => setFormErrors([])
// 		// )(values);

// 		// props.onSubmit(values);
// 	};

// 	return <form onSubmit={onSubmit} class={sps({ display: 'flex', flexDirection: props.column ? 'column' : 'row', gap: 'large' })}>
// 		<For each={props.inputs}>
// 			{(input) => {
// 				return <div>
// 					<p>{input.label}</p>
// 					<input
// 						type={input.type}
// 						name={input.name}
// 						value={input.value}
// 						onInput={(e: any) => setFields(input.name as any, e.target.value)} // todo
// 					/>
// 				</div>;
// 			}}
// 		</For>
// 		<Show when={formErrors().length > 0}>
// 			{formErrors().map((err) => l(err)).join(',')}
// 		</Show>
// 		<button class={btn.black}>Submit</button>
// 	</form>;
// };