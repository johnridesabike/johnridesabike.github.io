module Header = {
  type link = {
    url: string,
    title: string,
  };

  module Menu = {
    let styles = Gatsby.loadCssModule("./menu.module.css");

    [@react.component]
    let make = (~links) => {
      let (menuToggled, setMenuToggled) = React.useState(() => "");
      <React.Fragment>
        <div
          id="toggle-button"
          className={Cn.make([styles##menuButton, menuToggled])}>
          <button
            className={styles##toggle}
            ariaControls="primary-menu"
            ariaExpanded=false
            onClick={_ =>
              menuToggled === ""
                ? setMenuToggled(styles##toggled) : setMenuToggled(_ => "")
            }>
            <Externals.VisuallyHidden>
              {React.string("Menu")}
            </Externals.VisuallyHidden>
            <Icons.Menu
              className={Cn.make([styles##toggleIcon, styles##menuIcon])}
            />
            <Icons.Dismiss
              className={Cn.make([styles##toggleIcon, styles##dismissIcon])}
            />
          </button>
        </div>
        <nav
          id="site-navigation"
          className={Cn.make(["has-ui-font", styles##navigation])}>
          <ul
            id="primary-menu"
            className={Cn.make([styles##menu, menuToggled])}
            ariaExpanded=false>
            {Belt.List.map(links, ({url, title}) =>
               <li key=url className={styles##menuItem}>
                 <Gatsby.Link _to=url className={styles##menuLink}>
                   {React.string(title)}
                 </Gatsby.Link>
               </li>
             )
             |> Belt.List.toArray
             |> React.array}
          </ul>
        </nav>
      </React.Fragment>;
    };
  };

  let styles = Gatsby.loadCssModule("./header.module.css");

  [@react.component]
  let make = (~siteTitle="", ~siteDescription="", ~entryHeader) =>
    <header
      id="masthead"
      className={Cn.make([styles##headerWrapper, "smallscreen-padding"])}>
      <div id="global-header" className={styles##globalHeader}>
        <div className={styles##branding}>
          <p className={styles##title}>
            <Gatsby.Link _to="/" rel="home" className={styles##linkHome}>
              {React.string(siteTitle)}
            </Gatsby.Link>
          </p>
          <p className={styles##description}>
            {React.string(siteDescription)}
          </p>
        </div>
        <Menu
          links=[
            {url: "/", title: "Home"},
            {url: "/resume/", title: {j|Résumé|j}},
          ]
        />
      </div>
      entryHeader
    </header>;
};

module Footer = {
  let styles = Gatsby.loadCssModule("./footer.module.css");
  let widgetStyles = Gatsby.loadCssModule("../styles/widgets.module.css");

  [@react.component]
  let make = () =>
    <footer
      id="colophon"
      className={Cn.make([
        styles##footerWrapper,
        "has-ui-font",
        "smallscreen-padding",
      ])}>
      <div className={Cn.make([styles##footer, widgetStyles##widgetArea])}>
        <section
          className={Cn.make([widgetStyles##widget, styles##footerWidget])}>
          <p>
            {React.string({j|Copyright © |j})}
            <span property="cc:attributionName">
              {React.string("John Jackson")}
            </span>
          </p>
          <p>
            <Icons.CreativeCommons height="32" className={styles##ccIcon} />
            {React.string(
               {|All content by John on this site is licensed under a |},
             )}
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0">
              {React.string(
                 {|Creative Commons Attribution-ShareAlike 4.0 International License|},
               )}
            </a>
            {React.string(".")}
          </p>
        </section>
        <section
          className={Cn.make([widgetStyles##widget, styles##footerWidget])}>
          <p>
            {React.string(
               {|This website doesn't collect or store anything about you or any of its users.|},
             )}
          </p>
        </section>
      </div>
    </footer>;
};

let styles = Gatsby.loadCssModule("./layout.module.css");

[@react.component]
let make = (~children, ~entryHeader=React.null) => {
  let data = Queries.useSiteMetadata();
  <React.Fragment>
    <div id="page" className={styles##site}>
      <Externals.VisuallyHidden>
        <a className="skip-link" href="#content">
          {React.string @@ "Skip to content."}
        </a>
      </Externals.VisuallyHidden>
      <Header
        siteTitle={data##site##siteMetadata##title}
        siteDescription={data##site##siteMetadata##description}
        entryHeader
      />
      <div
        id="content"
        className={Cn.make([styles##content, "smallscreen-padding"])}>
        children
        <Sidebar />
      </div>
      <Footer />
    </div>
  </React.Fragment>;
};