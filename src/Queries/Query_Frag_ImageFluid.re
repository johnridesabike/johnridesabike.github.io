[%%raw "import { graphql } from 'gatsby'"];

[%graphql
  {|
fragment ImageFluid on ImageSharpFluid {
  srcSet
  src
  sizes
  aspectRatio
}
|};
  {inline: true}
];
