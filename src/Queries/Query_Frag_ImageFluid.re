[%graphql
  {|
fragment ImageFluid on ImageSharpFluid {
  srcSet
  src
  sizes
  aspectRatio
}
|}
];

let query = ImageFluid.query;
