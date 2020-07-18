module Header = {
  type link = {
    url: string,
    title: string,
  };

  module Menu = {
    let styles = Gatsby.loadCssModule("./menu.module.css");

    [@react.component]
    let make = (~links) => {
      let (menuToggled, setMenuToggled) = React.Uncurried.useState(() => "");
      <>
        <div
          id="toggle-button" className=Cn.(styles##menuButton <:> menuToggled)>
          <button
            className={styles##toggle}
            ariaControls="primary-menu"
            ariaExpanded=false
            onClick={_ =>
              menuToggled === ""
                ? setMenuToggled(. styles##toggled)
                : setMenuToggled(. _ => "")
            }>
            <Externals.VisuallyHidden>
              "Menu"->React.string
            </Externals.VisuallyHidden>
            <Icons.Menu
              className=Cn.(styles##toggleIcon <:> styles##menuIcon)
            />
            <Icons.Dismiss
              className=Cn.(styles##toggleIcon <:> styles##dismissIcon)
            />
          </button>
        </div>
        <nav
          id="site-navigation"
          className=Cn.("has-ui-font" <:> styles##navigation)>
          <ul
            id="primary-menu"
            className=Cn.(styles##menu <:> menuToggled)
            ariaExpanded=false>
            {links
             ->Belt.Array.map(({url, title}) =>
                 <li key=url className={styles##menuItem}>
                   <Gatsby.Link _to=url className={styles##menuLink}>
                     title->React.string
                   </Gatsby.Link>
                 </li>
               )
             ->React.array}
          </ul>
        </nav>
      </>;
    };
  };

  let styles = Gatsby.loadCssModule("./header.module.css");

  [@react.component]
  let make = (~siteTitle="", ~siteDescription="", ~entryHeader) =>
    <header
      id="masthead"
      className=Cn.(styles##headerWrapper <:> "smallscreen-padding")>
      <div id="global-header" className={styles##globalHeader}>
        <div className={styles##branding}>
          <p className={styles##title}>
            <Gatsby.Link _to="/" rel="home" className={styles##linkHome}>
              siteTitle->React.string
            </Gatsby.Link>
          </p>
          <p className={styles##description}>
            siteDescription->React.string
          </p>
        </div>
        <Menu
          links=[|
            {url: "/", title: "Home"},
            {url: "/resume/", title: {j|Résumé|j}},
          |]
        />
      </div>
      entryHeader
    </header>;
};

let widgetStyles = Gatsby.loadCssModule("./widgets.module.css");

module Footer = {
  let styles = Gatsby.loadCssModule("./footer.module.css");

  [@react.component]
  let make = () =>
    <footer
      id="colophon"
      className=Cn.(
        styles##footerWrapper <:> "has-ui-font" <:> "smallscreen-padding"
      )>
      <div className=Cn.(styles##footer <:> widgetStyles##widgetArea)>
        <section className=Cn.(widgetStyles##widget <:> styles##footerWidget)>
          <p>
            {j|Copyright © 2020 |j}->React.string
            <span property="cc:attributionName">
              "John Jackson"->React.string
            </span>
          </p>
          <p>
            <Icons.CreativeCommons height="32" className={styles##ccIcon} />
            {|All content by John on this site is licensed under a |}
            ->React.string
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0">
              {|Creative Commons Attribution-ShareAlike 4.0 International License|}
              ->React.string
            </a>
            "."->React.string
          </p>
        </section>
        <section className=Cn.(widgetStyles##widget <:> styles##footerWidget)>
          <p>
            {|This website doesn't collect or store anything about you or any of its users.|}
            ->React.string
          </p>
        </section>
      </div>
    </footer>;
};

module Sidebar = {
  type icon = {
    icon: React.element,
    title: string,
    url: string,
  };
  let socialMenu = [|
    {
      icon: <Icons.LinkedIn className="svgIconColored" />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/johnbpjackson/",
    },
    {
      icon: <Icons.GitHub className="svgIconColored" />,
      title: "GitHub",
      url: "https://github.com/johnridesabike",
    },
    {
      icon: <Icons.LibraryThing className="svgIconColored" />,
      title: "LibraryThing",
      url: "https://www.librarything.com/profile/jbpjackson",
    },
    {
      icon: <Icons.Chess className="svgIconColored" />,
      title: "Challenge me to a game of chess",
      url: "https://lichess.org/@/Chessahoochee",
    },
  |];

  [@react.component]
  let make = () => {
    let images = Query.useImages();
    <aside
      id="secondary" className=Cn.(widgetStyles##widgetArea <:> "has-ui-font")>
      <section className={widgetStyles##widget}>
        <h4> "About John"->React.string </h4>
        <div>
          {switch (images.john2018) {
           | Some({sharpImg: Some({small: Some(fixed), _}), _}) =>
             <Gatsby.Img
               className="avatar alignleft"
               fixed
               alt="Portrait of John"
             />
           | _ => React.null
           }}
        </div>
        <p>
          {j|I’m a public library staffer who is interested in digital library
         technologies, web development, and libraries of all types.|j}
          ->React.string
        </p>
        <p>
          {j|This website is home to my blog, portfolio, and other projects I’ve
         managed. |j}
          ->React.string
          <Gatsby.Link _to="/">
            "Head to the home page"->React.string
          </Gatsby.Link>
          " if this is your first time here."->React.string
        </p>
      </section>
      <section className={widgetStyles##widget}>
        <h4> "Connect with John"->React.string </h4>
        <ul id="menu-social-menu" className="menu">
          {Array.map(socialMenu, ({url, icon, title}) =>
             <li key=url>
               <a href=url> icon "\xa0"->React.string title->React.string </a>
             </li>
           )
           ->React.array}
        </ul>
      </section>
    </aside>;
  };
};

let styles = Gatsby.loadCssModule("./Layout.module.css");

[@react.component]
let make = (~children, ~entryHeader=React.null) => {
  let siteMetaData = Query.useSiteMetaData();
  <>
    <div id="page" className={styles##site}>
      <Externals.VisuallyHidden>
        <a className="skip-link" href="#content">
          "Skip to content."->React.string
        </a>
      </Externals.VisuallyHidden>
      {switch (siteMetaData) {
       | Query.SiteMetadata.{
           site: Some({siteMetadata: {title, description, _}}),
         } =>
         <Header siteTitle=title siteDescription=description entryHeader />
       | {site: None} => <Header entryHeader />
       }}
      <div
        id="content" className=Cn.(styles##content <:> "smallscreen-padding")>
        children
        <Sidebar />
      </div>
      <Footer />
    </div>
  </>;
};

let default = make;
