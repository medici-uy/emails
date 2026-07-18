import { Heading } from "../components/Heading.js";
import { Layout } from "../components/Layout.js";
import { SignOff } from "../components/SignOff.js";
import { Text } from "../components/Text.js";

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
