// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'

// ___________________________________________________________________

export type Props = {
  children: React.ReactNode
  location?: {
    pathname: string
  }
}

const Layout: React.FC<Props> = ({ children }) => {
  // eslint-disable-next-line no-console
  console.log(
    `%c Natural Mystic Massage | crafted with care | caseykennedy.hns.to `,
    `background: #5700ff; color: #ffffff`
  )
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      {/* <Footer /> */}
    </S.Wrapper>
  )
}

export default Layout

// ___________________________________________________________________

// export const withLayout = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ) =>
//   class WithLayout extends React.Component<P & LayoutProps> {
//     render() {
//       return (
//         <Layout location={this.props.location}>
//           <WrappedComponent {...this.props} />
//         </Layout>
//       )
//     }
//   }
