import { Text as BaseText } from "@react-email/components";

export type TextProps = React.PropsWithChildren<{
	className?: string;
}>;

export function Text(props: TextProps) {
	return (
		<BaseText className={`text-base text-left ${props.className}`}>
			{props.children}
		</BaseText>
	);
}
