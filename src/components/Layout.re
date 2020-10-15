module Header = {
  type link = {
    url: string,
    title: string,
  };

  module Menu = {
    [@react.component]
    let make = (~links) => {
      let (menuToggled, setMenuToggled) = React.Uncurried.useState(() => "");
      <>
        <div
          id="toggle-button" className=Cn.("menu__menuButton" <:> menuToggled)>
          <button
            className={"menu__toggle"}
            ariaControls="primary-menu"
            ariaExpanded=false
            onClick={_ =>
              menuToggled === ""
                ? setMenuToggled(. _ => "menu__toggled")
                : setMenuToggled(. _ => "")
            }>
            <Externals.VisuallyHidden>
              "Menu"->React.string
            </Externals.VisuallyHidden>
            <Icons.Menu
              className="menu__toggleIcon menu__menuIcon"
            />
            <Icons.Dismiss
              className="menu__toggleIcon menu__dismissIcon"
            />
          </button>
        </div>
        <nav
          id="site-navigation"
          className="has-ui-font menu__navigation">
          <ul
            id="primary-menu"
            className=Cn.("menu__menu" <:> menuToggled)
            ariaExpanded=false>
            {links
             ->Belt.Array.map(({url, title}) =>
                 <li key=url className="menu__menuItem">
                   <Gatsby.Link _to=url className="menu__menuLink">
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

  [@react.component]
  let make = (~siteTitle="", ~siteDescription="", ~entryHeader) =>
    <header
      id="masthead"
      className="header__headerWrapper smallscreen-padding">
      <div id="global-header" className="header__globalHeader">
        <div className="header__branding">
          <p className="header__title">
            <Gatsby.Link _to="/" rel="home" className="header__linkHome">
              siteTitle->React.string
            </Gatsby.Link>
          </p>
          <p className="header__description">
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

module Footer = {
  [@react.component]
  let make = () =>
    <footer
      id="colophon"
      className="footer__footerWrapper has-ui-font smallscreen-padding"
      >
      <div className="footer__footer widget__widgetArea">
        <section className="widget__widget footer__footerWidget">
          <p>
            {j|Copyright © 2020 |j}->React.string
            <span property="cc:attributionName">
              "John Jackson"->React.string
            </span>
          </p>
          <p>
            <Icons.CreativeCommons height="32" className="footer__ccIcon" />
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
        <section className="widget__widget footer__footerWidget">
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
    let images = QueryImages.useQuery();
    <aside
      id="secondary" className="widget__widgetArea has-ui-font">
      <section className="widget__widget">
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
      <section className="widget__widget">
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

[@react.component]
let make = (~children, ~entryHeader=React.null) => {
  let siteMetaData = QuerySiteMetadata.useQuery();
  <>
    <div id="page" className="layout__site">
      <Externals.VisuallyHidden>
        <a className="skip-link" href="#content">
          "Skip to content."->React.string
        </a>
      </Externals.VisuallyHidden>
      {switch (siteMetaData) {
       | QuerySiteMetadata.{
           site: Some({siteMetadata: {title, description, _}}),
         } =>
         <Header siteTitle=title siteDescription=description entryHeader />
       | {site: None} => <Header entryHeader />
       }}
      <div
        id="content" className="layout__content smallscreen-padding">
        children
        <Sidebar />
      </div>
      <Footer />
    </div>
  </>;
};

let default = make;
