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

module Sharp = {
  type fixed;
  type fluid = {
    src: string,
    srcSet: string,
    sizes: string,
    aspectRatio: int,
  };
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
    sharpImg: Js.Nullable.t(childImageSharp),
  }
  and childImageSharp = {fixed: Sharp.fixed};
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
    sharpImg: nullable(childImageSharp),
  }
  and childImageSharp = {
    mobileImage: Sharp.fluid,
    tabletImage: Sharp.fluid,
    desktopImage: Sharp.fluid,
  }
  and attachments = {
    [@bs.as "publicURL"]
    fileUrl: string,
    name: string,
    extension: string,
  };
};

module Images = {
  type t = {john2018}
  and john2018 = {sharpImg}
  and sharpImg = {
    large: Sharp.fixed,
    small: Sharp.fixed,
  };
};

type query('node) = {allMarkdownRemark: allMarkdownRemark('node)}
and allMarkdownRemark('node) = {edges: array(edge('node))}
and edge('node) = {node: 'node};
