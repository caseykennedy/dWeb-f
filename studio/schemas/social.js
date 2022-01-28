import { MdSettings } from 'react-icons/md'

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: MdSettings,
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    }
  ]
}
