let styles = Gatsby.loadCssModule("./index.module.css");

[@react.component]
let make = () => {
  let images = Queries.Images.useImages();
  <Layout>
    <Seo title="Home" keywords=[|"librarian", "software", "woodworking"|] />
    <main id="main" className="site-main page-content">
      <div className={styles##topColumns}>
        <figure>
          <Gatsby.Img
            fixed=[|QueryTypes.Images.(images.john2018.sharpImg.large)|]
            alt="Portrait of John"
            className="avatar"
          />
        </figure>
        <p className=Cn.(styles##hi <:> "has-large-font-size")>
          {j|Hi, I'm John Jackson.|j}->React.string
        </p>
      </div>
      <p>
        {j|I’m a public library staffer who is interested in digital library
	   technologies, web development, and libraries of all types. I like to
	   bike, write, build, and tinker.|j}
        ->React.string
      </p>
      <div className={styles##topColumns}>
        <div>
          <p>
            <strong>
              {j|Hiring? Here’s a bit about me:|j}->React.string
            </strong>
          </p>
          <p style={ReactDOMRe.Style.make(~textAlign="left", ())}>
            <span role="img" ariaLabel="check">
              {j|✔️|j}->React.string
            </span>
            {j| MLIS Graduate.|j}->React.string
          </p>
          <p style={ReactDOMRe.Style.make(~textAlign="left", ())}>
            <span role="img" ariaLabel="check">
              {j|✔️|j}->React.string
            </span>
            " Working in libraries since 2015."->React.string
          </p>
          <p style={ReactDOMRe.Style.make(~textAlign="left", ())}>
            <span role="img" ariaLabel="check">
              {j|✔️|j}->React.string
            </span>
            {j| Experience in adult services programming, web development, data
	       management, customer service, and more.|j}
            ->React.string
          </p>
          <div
            className=Cn.(
              "wp-block-button" <:> "aligncenter" <:> "is-style-squared"
            )>
            <Gatsby.Link className="button-link__link" _to="/resume/">
              {j|View my full résumé|j}->React.string
            </Gatsby.Link>
          </div>
        </div>
        <div>
          <p> <strong> {j|Let’s get in touch.|j}->React.string </strong> </p>
          <p style={ReactDOMRe.Style.make(~textAlign="left", ())}>
            {j|Questions, comments, job offers, jokes, poems, or just to say
	       “hi.”|j}
            ->React.string
          </p>
          <div
            className=Cn.(
              "wp-block-button" <:> "aligncenter" <:> "is-style-squared"
            )>
            <a
              className="button-link__link"
              href="mailto:jbpjackson@icloud.com">
              <Icons.Mail />
              " Email me"->React.string
            </a>
          </div>
        </div>
      </div>
      <hr />
      <Libraries.ExcerptList />
      <hr />
      <Software.ExcerptList />
      <hr />
      <Woodworking.ExcerptList />
    </main>
  </Layout>;
};
