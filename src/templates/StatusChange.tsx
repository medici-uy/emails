export function Template() {
	return "Current status: {{healthy}}.";
}

export const name = "status_change";
export const subject =
	"Sentinel: medici health status has changed to {{healthy}}";

export default Template;
