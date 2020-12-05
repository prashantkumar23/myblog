import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>
        Sorry{" "}
        <span role="img" aria-label="sad">
          😔
        </span>
        —we couldn’t find what you were looking for.
      </h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
