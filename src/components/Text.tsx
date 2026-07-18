import { Text as BaseText } from "react-email";
import type { ClassNameProp } from "../types.ts";

export type TextProps = React.PropsWithChildren<ClassNameProp>;

export function Text(props: TextProps) {
	return (
		<BaseText className={`text-base text-left ${props.className}`}>
			{props.children}
		</BaseText>
	);
}
