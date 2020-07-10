module Fragment = {
  module ImageFixed = Query_Frag_ImageFixed;
  module ImageFluid = Query_Frag_ImageFluid;
  module PageList = Query_Frag_PageList;
  module PageExcerpt = Query_Frag_PageExcerpt;
};

module SiteMetadata = Query_SiteMetadata;

let useSiteMetaData = Query_SiteMetadata.useSiteMetaData;

module Images = Query_Images;

let useImages = Query_Images.useQuery;

module Video = Query_Videos;

let useVideos = Video.useQuery;
