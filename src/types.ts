import type React from "react";

export type ClassNameProp<T = HTMLElement> = Pick<
	React.HTMLAttributes<T>,
	"className"
>;
