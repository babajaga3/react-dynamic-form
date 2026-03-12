import type { ReactNode } from 'react'
import type { ZodAny } from "zod";

export type FormField = {
  type: string; // todo enum/literal
  label: string;
  validation: ZodAny;
  // ... extend props from components, based on teh design provider (i think)
}

export type FormSchema = FormField[]

export type CreateForm = {
  uiProvider: 'default' | UiProvider;
  schema: FormSchema;
  baseFields?: string; // todo extends form field types, also change name later
}

export type UiProvider = string

export type CreateFormReturnType = {
  DynamicForm: ReactNode
}