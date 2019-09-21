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