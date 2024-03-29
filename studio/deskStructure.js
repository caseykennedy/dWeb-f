import S from '@sanity/desk-tool/structure-builder'
import { MdStop, MdSettings } from 'react-icons/md'
import { GoFile } from 'react-icons/go'

// const hiddenTypes = [
//   'category',
//   'companyInfo',
//   'page',
//   'person',
//   'post',
//   'project',
//   'siteSettings'
// ]

export default () =>
  S.list()
    .title('HNSF Content')
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // Social
      // _________________________________________________________________
      S.listItem()
        .title('Social Links')
        .schemaType('social')
        .child(S.documentTypeList('social').title('Social Links')),

      // People
      // _________________________________________________________________

      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title('Post Categories')
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Category'))

        .icon(MdStop),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(GoFile)

      // End
      // _________________________________________________________________
    ])
