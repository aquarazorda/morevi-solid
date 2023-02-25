import { Component } from 'solid-js';
import { useField } from 'solid-js-form';

export const Input: Component<{name:string, label:string}> = (props) => {
  const {field, form} = useField<any>(props.name);
  const formHandler = form.formHandler;
  
  return (
    <>
      <label for={props.name}>
        {props.label}
        {field.required() ? " *" : ""}
      </label>
      <input
        name={props.name}
        value={field.value()}
        //@ts-ignore
        use:formHandler //still need to properly type the handler
      />
      <span>{field.error()}</span>
    </>
  );
};