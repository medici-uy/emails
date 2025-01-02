import { Heading } from "../components/Heading.tsx";
import { Layout } from "../components/Layout.tsx";
import { SignOff } from "../components/SignOff.tsx";
import { Text } from "../components/Text.tsx";

export function Template() {
	return (
		<Layout preview={subject}>
			<Heading as="h1">Verificá tu email en medici</Heading>
			<Text>Hola,</Text>
			<Text>
				Cambiaste tu email en tu cuenta de medici. Para verificarlo usá este
				código:
			</Text>
			<Text className="text-center text-4xl font-bold tracking-wide">
				{"{{code}}"}
			</Text>
			<SignOff />
		</Layout>
	);
}

export const name = "email_verification";
export const subject = "Verificá tu email en medici";

export default Template;
