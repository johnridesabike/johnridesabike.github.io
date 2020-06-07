/**
 * Different Gatsby queries can produce slightly different types. This module
 * attempts to keep them organized and as unified as possible. Be aware that
 * these must be in sync with the actual queries used throughout the project.
 */
module SiteMetadata = {
  type t = {site}
  and site = {siteMetadata}
  and siteMetadata = {
    title: string,
    description: string,
    author: string,
  };
};

module GatsbyNode = {
  type node = {
    fields,
    internal,
    parent,
    frontmatter: option(frontmatter),
  }
  and frontmatter = {
    slug: option(string),
    date: option(string),
  }
  and internal = {
    [@bs.as "type"]
    nodeType: string,
  }
  and fields = {
    [@bs.as "slug"]
    fieldSlug: string,
    fullPath: string,
    parentDir: string,
  }
  and parent;

  type fileNode = {relativePath: string};
};

module ListPages = {
  type node = {
    fields,
    excerpt: string,
    timeToRead: int,
    frontmatter,
  }
  and fields = {
    [@bs.as "slug"]
    pageSlug: string,
    parentDir: string,
    fullPath: string,
  }
  and frontmatter = {
    [@bs.as "title"]
    pageTitle: string,
    date: string,
    isoDate: string,
    thumbnail: Js.Nullable.t(thumbnail),
  }
  and thumbnail = {
    publicURL: string,
    childImageSharp: Js.Nullable.t(childImageSharp),
  }
  and childImageSharp = {fluid}
  and fluid = {
    srcSet: string,
    src: string,
  };
};

module PageTemplate = {
  type nullable('a) = Js.Nullable.t('a);

  type data = {markdownRemark}
  and markdownRemark = {
    html: string,
    frontmatter,
    fields,
  }
  and fields = {slug: string}
  and frontmatter = {
    [@bs.as "date"]
    frontmatterDate: nullable(string),
    isoDate: nullable(string),
    title: string,
    author: nullable(string),
    caption: nullable(string),
    updated: nullable(string),
    isoUpdated: string,
    thumbnail: nullable(thumbnail),
    attachments: nullable(array(attachments)),
  }
  and thumbnail = {
    publicURL: string,
    childImageSharp: nullable(childImageSharp),
  }
  and childImageSharp = {fluid}
  and fluid = {
    srcSet: string,
    src: string,
  }
  and attachments = {
    [@bs.as "publicURL"]
    fileUrl: string,
    name: string,
    extension: string,
  };
};

module Images = {
  type t = {file}
  and file = {childImageSharp}
  and childImageSharp = {fixed}
  and fixed = {
    src: string,
    srcSet: string,
  };
};

type query('node) = {allMarkdownRemark: allMarkdownRemark('node)}
and allMarkdownRemark('node) = {edges: array(edge('node))}
and edge('node) = {node: 'node};
