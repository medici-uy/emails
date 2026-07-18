import {
	Heading as BaseHeading,
	type HeadingProps as BaseHeadingProps,
} from "react-email";

export type HeadingProps = BaseHeadingProps;

export function Heading(props: HeadingProps) {
	return (
		<BaseHeading {...props} className="text-left text-xl mt-0 mb-4">
			{props.children}
		</BaseHeading>
	);
}
