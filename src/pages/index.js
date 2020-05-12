import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <div className="landing-page">
      <p>
        Welcome to the inclusive design checklist. This initiative was started
        as a method for educating designers and developers about accessibility
        and removing the stigma that it's difficult to learn. To get started,
        click the start button below.
      </p>
      <Link to="/checklist">Start</Link>
    </div>
  </Layout>
)

export default IndexPage
