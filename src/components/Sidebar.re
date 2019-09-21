type icon = {
  icon: React.element,
  title: string,
  url: string,
};
let socialMenu = [|
  {
    icon: <Icons.LinkedIn />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/johnbpjackson/",
  },
  {
    icon: <Icons.GitHub />,
    title: "GitHub",
    url: "https://github.com/johnridesabike",
  },
  {
    icon: <Icons.LibraryThing />,
    title: "LibraryThing",
    url: "https://www.librarything.com/profile/jbpjackson",
  },
  {
    icon: <Icons.Chess />,
    title: "Challenge me to a game of chess",
    url: "https://lichess.org/@/Chessahoochee",
  },
|];

let styles = Gatsby.loadCssModule("../styles/widgets.module.css");
let johnPic = Gatsby.loadJpg("../images/john2018.jpg");

[@react.component]
let make = () =>
  <aside
    id="secondary" className={Cn.make([styles##widgetArea, "has-ui-font"])}>
    <section className={styles##widget}>
      <h4> {React.string @@ "About John"} </h4>
      <p>
        <img
          className="avatar alignleft"
          src=johnPic
          alt="Portrait of John"
          scale="0"
          width="150"
          height="150"
        />
      </p>
      <p>
        {React.string @@
         {j|I’m a public library staffer who is interested in digital library
         technologies, web development, and libraries of all types.|j}}
      </p>
      <p>
        {React.string @@
         {j|This website is home to my blog, portfolio, and other projects I’ve
         managed. |j}}
        <Gatsby.Link _to="/">
          {React.string @@ "Head to the home page"}
        </Gatsby.Link>
        {React.string @@ " if this is your first time here."}
      </p>
    </section>
    <section className={styles##widget}>
      <h4> {React.string @@ "Connect with John"} </h4>
      <ul id="menu-social-menu" className="menu">
        {Js.Array2.map(socialMenu, ({url, icon, title}) =>
           <li key=url>
             <a href=url>
               icon
               {React.string @@ "\xa0"}
               {React.string @@ title}
             </a>
           </li>
         )
         |> React.array}
      </ul>
    </section>
  </aside>;