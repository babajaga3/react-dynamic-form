import type { ComponentType } from 'react'
import type { UseFormReturn } from 'react-hook-form'


export type UiAdapterConstraint = Record<string, ComponentType<any>>;

export type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

export type FieldFromAdapter<TAdapter extends UiAdapterConstraint> = {
  [K in keyof TAdapter]: {
  type: K;
  name: string;
} & PropsOf<TAdapter[K]>;
}[keyof TAdapter];

export type CreateForm<TAdapter extends UiAdapterConstraint> = {
  uiAdapter: TAdapter;
  fields: FieldFromAdapter<TAdapter>[];
  form: UseFormReturn;
};

// todo create a default one
