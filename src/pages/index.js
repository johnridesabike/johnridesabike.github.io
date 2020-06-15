import {make} from "../pages_re/Page_Index.bs";
import {graphql} from "gatsby";
export default make;

export const query = graphql`
fragment PageExcerpt2 on MarkdownRemark {
  excerpt
}

query Test {
  markdownRemark {
    ...PageExcerpt2
  }
}

`;
