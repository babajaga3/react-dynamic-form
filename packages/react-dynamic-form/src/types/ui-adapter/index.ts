import type { ComponentProps, ComponentType, Ref } from 'react'

export type BaseFieldProps = {
  name: string;
  value: unknown;
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  ref: Ref<any>;
  // error?: FieldError;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};

export type UiAdapterComponentExtras = ComponentProps<any>;
export type UiAdapterComponent<
  T extends UiAdapterComponentExtras = UiAdapterComponentExtras,
> = ComponentType<BaseFieldProps & T>;

export type UiAdapterConstraint<
  T extends UiAdapterComponentExtras = UiAdapterComponentExtras,
> = {
  text: UiAdapterComponent<T>;
  number: UiAdapterComponent<T>;
};

export type UiAdapter<
  T extends UiAdapterConstraint = UiAdapterConstraint,
> = T;

export type ExtrasOf<C> =
  C extends ComponentType<infer P> ? Omit<P, keyof BaseFieldProps> : never;
