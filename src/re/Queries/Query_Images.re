[%graphql
  {|
query Images {
  john2018: file(relativePath: {eq: "john2018.jpg"}) {
    sharpImg: childImageSharp {
      large: fixed(height: 256, width: 256){
        ...Query_Frag_ImageFixed.ImageFixed
      }
      small: fixed(height: 150, width: 150) {
        ...Query_Frag_ImageFixed.ImageFixed
      }
    }
  }
}
|}
];

let useImages: unit => Images.t =
  () => Images.query->Gatsby.useStaticQueryUnsafe->Images.parse;

