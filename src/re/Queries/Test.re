[%graphql
  {|
query Test($path: String!) {
  markdownRemark(fields: {fullPath: {eq: $path}}) {
    frontmatter {
      thumbnail {
        image {
          sharpImg: childImageSharp {
            mobileImage: fluid(maxWidth: 600) {
              ...Test_Frag
            }
            desktopImage: fluid(maxWidth: 1200) {
              ...Test_Frag
            }
          }
        }
      }
    }
  }
}
|}
];
