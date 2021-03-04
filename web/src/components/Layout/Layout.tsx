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

const FormHidden = () => {
  return (
    <form
      name="Apply for a grant — dWeb"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{ display: 'none' }}
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="grant-application-form"
        value="Apply for a grant — dWeb"
      />

      <fieldset>
        <div>
          <div>
            <label htmlFor="name">
              Name:{' '}
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required={true}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
              name="email"
              placeholder="Email"
              type="email"
              required={true}
            />
          </div>
        </div>

        <div>
          <label htmlFor="comments">
            Project mission statement. Tell us how you're supporting Handshake
            with what you're building:{' '}
          </label>
          <textarea
            name="details"
            id="details"
            rows={6}
            placeholder="Tell us about your project"
          />
        </div>

        <div>
          <div>
            <label htmlFor="project-repo">
              Project repo link:{' '}
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
              type="text"
              name="project-repo"
              id="project-repo"
              placeholder="Project repo"
              required={true}
            />
          </div>
          <div>
            <label htmlFor="grant-amount">Grant amount:</label>
            <select id="grant-amount">
              <option>Grant amount</option>
              <option value="500-2500">500 - 2,500</option>
              <option value="2500-10000">2,500 - 10,000</option>
              <option value="10000-25000">10,000 - 25,000</option>
              <option value="25000+">25,000+</option>
            </select>
          </div>
        </div>

        <div>
          <button type="submit" value="submit">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  )
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(
    `%c dWeb Foundation | crafted with care | caseykennedy.hns.to `,
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
