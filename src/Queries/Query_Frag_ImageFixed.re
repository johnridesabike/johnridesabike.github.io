[%%raw "import { graphql } from 'gatsby'"];

[%graphql
  {|
fragment ImageFixed on ImageSharpFixed {
  src
  srcSet
  height
  width
}
|};
  {inline: true}
];
