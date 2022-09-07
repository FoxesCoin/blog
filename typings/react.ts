import { FC, ReactNode } from 'react';

export interface ReactElement {
  className?: string;
  children?: null;
}

export interface ReactWrapper {
  className?: string;
  children: ReactNode;
}

export type RElement<T = {}> = FC<T & ReactElement>;
export type RWrapper<T = {}> = FC<T & ReactWrapper>;
