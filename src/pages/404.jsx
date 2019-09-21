import React from "react"

import {make as Layout} from "../components/Layout.bs"
import {make as SEO} from "../components/Seo.bs";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
