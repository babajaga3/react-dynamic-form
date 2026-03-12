import z from 'zod'
import { ShadCnProvider } from '@stansun/design-providers'

export const usePilotForm = create({
  designProvider: ShadCnProvider,
  baseFields: {
    extends: ShadCnProvider,
    text: (
      <TextField />
    )
  },
  fields: [
    {
      type: 'text',
      name: 'First name'
    },
    {
      type: 'number',
      name: 'First name',
      validation: z.number().max(1000),
    },
    {
      type: 'text',
      name: 'First name'
    },
    {
      type: 'text',
      name: 'First name'
    },
    {
      type: 'text',
      name: 'First name'
    },
  ]
})
