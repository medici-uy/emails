import { Button } from "../components/Button.js";
import { Heading } from "../components/Heading.js";
import { Layout } from "../components/Layout.js";
import { SignOff } from "../components/SignOff.js";
import { Text } from "../components/Text.js";

export function Template() {
	return (
		<Layout preview={subject}>
			<Heading as="h1">¡Bienvenido a medici! 👋</Heading>
			<Text>Hola, {"{{first_name}}"},</Text>
			<Text>
				Con medici podés hacer parciales y exámenes viejos y buscar preguntas
				que han aparecido en alguna evaluación de la FMED Udelar.
			</Text>
			<Text className="font-bold">¡Volvé a tener veranos!</Text>
			<Button href="https://medici.uy">Ir a medici</Button>
			<SignOff />
		</Layout>
	);
}

export const name = "welcome";
export const subject = "¡Bienvenido a medici! 👋";

export default Template;
