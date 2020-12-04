import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"
import accessibilityChampionsLogo from "../images/accessibility-champions-logo.svg"
import { 
  ThemeProvider, 
  Typography 
} from "@getgo/chameleon-web/react";

const IndexPage = () => (
  <ThemeProvider theme="light">
    <Typography>
      <Layout>
          <div className="landing-page">
            <img
              style={{ maxWidth: "170px" }}
              src={accessibilityChampionsLogo}
              alt="Accessibility Champions"
            />
            <p>
              Welcome to the inclusive design checklist. This initiative was started
              as a method for educating designers and developers about accessibility
              and removing the stigma that it's difficult to learn. To get started,
              click the start button below.
            </p>
            <Link to="/checklist">Start</Link>
          </div>
      </Layout>
    </Typography>
  </ThemeProvider>
)

export default IndexPage
