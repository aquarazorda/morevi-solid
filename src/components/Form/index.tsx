import { createSignal, For, Show } from "solid-js";
import { AnyObject, Maybe, ObjectSchema } from "yup";
import { sps } from "~/styles/sprinkles.css";
import { btn } from "~/styles/button.css";
import { createStore } from "solid-js/store";
import { useI18n } from "@solid-primitives/i18n";

type HTMLInputTypeAttribute = "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime" | "datetime-local" | "month" | "week" | "color" | "range" | "file" | "image" | "submit" | "reset" | "button";

export type FormInput = {
  name: string,
  label: string,
  type: HTMLInputTypeAttribute,
  value?: string | number | string[],
}

type FormProps<T extends AnyObject> = {
  schema: ObjectSchema<T>,
  inputs: FormInput[],
  column?: boolean,
  onSubmit: (valid: boolean, formData?: T) => void,
}

export const Form = <T extends AnyObject,>(props: FormProps<T>) => {
	const [formData, setFields] = createStore<T>({} as T);
	const [formErrors, setFormErrors] = createSignal([]);
	const [l] = useI18n();

	const onSubmit = async (e: Event) => {
		e.preventDefault();
		try {
			await props.schema.validate(formData, { strict: true });
			props.onSubmit(true, formData);
			setFormErrors([]);
		} catch (err: any) {
			props.onSubmit(false);
			setFormErrors(err.errors);
		}
	};

	return <form onSubmit={onSubmit} class={sps({ display: "flex", flexDirection: props.column ? "column" : "row", gap: "large" })}>
		<For each={props.inputs}>
			{(input) => {
				return <div>
					<p>{input.label}</p>
					<input
						type={input.type}
						name={input.name}
						value={input.value}
						onInput={(e: any) => setFields(input.name as any, e.target.value)} // todo
					/>
				</div>;
			}}
		</For>
		<Show when={formErrors().length > 0}>
			{formErrors().map((err) => l(err)).join(",")}
		</Show>
		<button class={btn.black}>Submit</button>
	</form>;
};