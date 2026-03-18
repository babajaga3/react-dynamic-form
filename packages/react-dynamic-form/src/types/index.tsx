import type { ZodType } from 'zod'
import type { ExtrasOf, UiAdapterComponentExtras, UiAdapterConstraint } from './ui-adapter'
import { InputProps, TextField, TextFieldProps } from '@mui/material'


export type FieldEntry<T extends UiAdapterConstraint> = {
  [K in keyof UiAdapterConstraint]: {
  type: K
  name: string
  validation?: ZodType
} & ExtrasOf<T[K]>
}[keyof UiAdapterConstraint]

export type UiAdapter<T extends UiAdapterComponentExtras = UiAdapterComponentExtras> = UiAdapterConstraint<T>

export type CreateForm<T extends UiAdapterConstraint = UiAdapterConstraint> = {
  uiAdapter: UiAdapter<T>,
  fields: FieldEntry<T>[]
}
