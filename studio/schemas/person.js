import { MdPerson } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Advisor', value: 'advisor' },
          { title: 'Director', value: 'director' },
          { title: 'Team', value: 'team' }
        ]
      }
    },
    {
      name: 'executiveDirector',
      title: 'Executive Director?',
      type: 'boolean'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockText'
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar'
    }
  }
}
