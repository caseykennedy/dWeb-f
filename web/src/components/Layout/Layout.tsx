// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'
import GlobalStyles from '../../styles/global'

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
    `%c dWeb Foundation | crafted with care | caseykennedy.hns.to `,
    `background: #5700ff; color: #ffffff`
  )
  return (
    <>
      <FormHidden />
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.Main ref={mainRef}>{children}</S.Main>
        <Footer />
      </S.Wrapper>
    </>
  )
}

export default Layout

const FormHidden = () => {
  return (
    <form
      name="dWeb Incubator Application"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{ display: `none` }}
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-incubator-application"
        value="dWeb Incubator Application"
      />

      <fieldset>
        <div className="form-group">
          <div className="form-group__div">
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
          <div className="form-group__div">
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

        <div className="form-group">
          <div className="form-group__div">
            <label htmlFor="projectName">
              Project Name:{' '}
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
              type="text"
              name="projectName"
              id="projectName"
              placeholder="Project Name"
              required={true}
            />
          </div>

          <div className="form-group__div">
            <label htmlFor="projectEmail">
              Project Website:
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
              name="projectEmail"
              placeholder="Project Website"
              type="url"
              required={true}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pitch">
            Project pitch. Tell us how you're supporting Handshake with what
            you're building:
          </label>
          <textarea
            name="pitch"
            id="pitch"
            rows={6}
            placeholder="Tell us about your project (Pitch)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamSkills">
            Describe your team's ability (roles, skills, education, etc.)
          </label>
          <textarea
            name="teamSkills"
            id="teamSkills"
            rows={6}
            placeholder="Describe your team's ability (roles, skills, education, etc.)"
          />
        </div>

        <div className="form-group">
          <div className="form-group__div">
            <label htmlFor="currentStage">Current stage:</label>
            <select id="currentStage">
              <option value="" disabled={true} selected={true}>
                Current stage
              </option>
              <option value="idea">idea</option>
              <option value="prototype">prototype</option>
              <option value="working product">working product</option>
              <option value="generating revenue">generating revenue</option>
            </select>
          </div>

          <div className="form-group__div">
            <label htmlFor="teamMembers">Current stage:</label>
            <select id="teamMembers">
              <option value="" disabled={true} selected={true}>
                How many team members
              </option>
              <option value="1">1</option>
              <option value="2-6">2-6</option>
              <option value="7+">7+</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="howIsHandshakeUsed">
            How do you intend to use Handshake in your project?
          </label>
          <textarea
            name="howIsHandshakeUsed"
            id="howIsHandshakeUsed"
            rows={6}
            placeholder="How do you intend to use Handshake in your project?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="outsideInvestment">
            Have you taken any outside investment and if so, where did it come
            from?
          </label>
          <textarea
            name="outsideInvestment"
            id="outsideInvestment"
            rows={6}
            placeholder="Have you taken any outside investment and if so, where did it come from?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="availability">
            What is the availability of the founders from July to September?
            Please elaborate on any potential conflicts...
          </label>
          <textarea
            name="availability"
            id="availability"
            rows={6}
            placeholder="What is the availability of the founders from July to September? Please elaborate on any potential conflicts..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="whyChooseUs">
            Why should we choose your company?
          </label>
          <textarea
            name="whyChooseUs"
            id="whyChooseUs"
            rows={6}
            placeholder="Why should we choose your company?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="links">
            Please provide links to any other sample work from founders, videos,
            etc. that may be useful.
          </label>
          <textarea
            name="links"
            id="links"
            rows={6}
            placeholder="Please provide links to any other sample work from founders, videos, etc. that may be useful."
          />
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
