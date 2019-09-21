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
            rel="license" href="http://creativecommons.org/licenses/by-sa/4.0">
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