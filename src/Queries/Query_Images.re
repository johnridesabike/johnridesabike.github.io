[%%raw "import { graphql } from 'gatsby'"];

module ImageFixed = Query_Frag_ImageFixed;

[%graphql
  {|
query Images {
  john2018: file(relativePath: {eq: "john2018.jpg"}) {
    sharpImg: childImageSharp {
      large: fixed(height: 256, width: 256){
        ...ImageFixed
      }
      small: fixed(height: 150, width: 150) {
        ...ImageFixed
      }
    }
  }
  mwmatching: file(relativePath: {eq: "mwmatching.svg"}) {
    publicURL
  }
}
|};
  {inline: true}
];

let useQuery: unit => t = () => query->Gatsby.useStaticQueryUnsafe->parse;
