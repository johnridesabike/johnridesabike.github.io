[%graphql {|
fragment ImageFixed on ImageSharpFixed {
  src
  srcSet
  height
  width
}
|}]

let query = ImageFixed.query;
