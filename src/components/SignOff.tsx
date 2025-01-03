import { Text } from "./Text.js";

export type TextProps = React.PropsWithChildren<{
	className?: string;
}>;

export function SignOff(props: TextProps) {
	return (
		<Text className={props.className}>
			Éxitos,
			<br />
			Diego Stratta, Creador de medici
		</Text>
	);
}
