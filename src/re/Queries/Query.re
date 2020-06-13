module Fragments = {
  module ImageFixed = Query_Frag_ImageFixed.ImageFixed;
  module ImageFluid = Query_Frag_ImageFluid.ImageFluid;
  module PageList = Query_Frag_PageList.PageList;
};

module SiteMetadata = Query_SiteMetadata;

let useSiteMetaData = Query_SiteMetadata.useSiteMetaData;

module Images = Query_Images;

let useImages = Query_Images.useImages;

