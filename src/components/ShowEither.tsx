import { Either, isRight } from 'fp-ts/lib/Either';
import { JSX, Match, Switch } from 'solid-js';

type Props<T> = {
  either: Either<unknown, T>;
  fallback: JSX.Element;
  children: (value: T) => JSX.Element;
}

export const ShowEither = <T,>(props: Props<T>) => <Switch fallback={props.fallback}>
	<Match when={isRight(props.either)}>
		{isRight(props.either) && props.children(props.either.right)}
	</Match>
</Switch>;