import z, { type ZodType } from 'zod'
import type { CreateForm, UiAdapterConstraint } from '../types'
import { useForm } from 'react-hook-form'


export function constructZodSchema<TAdapter extends UiAdapterConstraint>(fields: CreateForm<TAdapter>['fields']) {
  const schemaFields: Record<string, ZodType> = {}

  fields.forEach(field => {
    if ('validation' in field && 'name' in field && field.validation && schemaFields[ field.name ] === undefined) {
      schemaFields[ field.name ] = field.validation
    }
  })

  const form = useForm()

  return z.strictObject(schemaFields)
}
