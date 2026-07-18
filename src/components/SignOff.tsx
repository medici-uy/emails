import type { ClassNameProp } from "../types.ts";
import { Text } from "./Text.js";

export type TextProps = React.PropsWithChildren<ClassNameProp>;

export function SignOff(props: TextProps) {
	return (
		<Text className={props.className}>
			Éxitos,
			<br />
			Diego Stratta, Creador de medici
		</Text>
	);
}
