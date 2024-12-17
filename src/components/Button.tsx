import { Button as BaseButton } from "@react-email/components";

export type ButtonProps = React.PropsWithChildren<{ href: string }>;

export function Button(props: ButtonProps) {
	return (
		<BaseButton
			className="rounded-full bg-primary px-7 py-3 text-base text-center font-bold text-white"
			href={props.href}
		>
			{props.children}
		</BaseButton>
	);
}
