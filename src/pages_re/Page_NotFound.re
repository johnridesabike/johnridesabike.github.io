[@react.component]
let make = () =>
  <Layout>
    <Seo title="404: Not found" description=`Site />
    <h1> "NOT FOUND"->React.string </h1>
    <p>
      {j|You just hit a route that doesn't exist... the sadness.|j}
      ->React.string
    </p>
  </Layout>;
