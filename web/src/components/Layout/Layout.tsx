// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'swiper/css/swiper.css'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  isShowing?: boolean
  toggleOverlay?: () => void
  location?: {
    pathname: string
  }
  // mainRef: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(
    `%c HNSF | crafted with care | caseykennedy.hns.to `,
    `background: #5700ff; color: #ffffff`
  )
  return (
    <S.Wrapper>
      <Header mainRef={mainRef} />
      <S.Main ref={mainRef}>{children}</S.Main>
      <Footer />
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
