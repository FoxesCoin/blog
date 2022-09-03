import { FC, ReactNode } from "react";

export interface ReactElement {
	className?: string;
	children?: null;
}

export interface ReactWrapper {
	className?: string;
	children: ReactNode;
}

interface ReactContainer {
	className?: string;
	children?: ReactNode;
}

export type RElement<T = {}> = FC<T & ReactElement>;
export type RWrapper<T = {}> = FC<T & ReactWrapper>;
export type RContainer<T = {}> = FC<T & ReactContainer>;
