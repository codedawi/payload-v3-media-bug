import type { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: "profile",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ]
}