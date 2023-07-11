import {createSchema} from 'sanity'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      titile: 'UserName',
      type: 'string',
    },
    {
      name: 'image',
      titile: 'Image',
      type: 'string',
    },
  ],
}
