module Fragments = {
  module ImageFixed = Query_Frag_ImageFixed.ImageFixed;
  module ImageFluid = Query_Frag_ImageFluid.ImageFluid;
  module PageList = Query_Frag_PageList.PageList;
};

module SiteMetadata = Query_SiteMetadata.SiteMetadata;

let useSiteMetaData = Query_SiteMetadata.useSiteMetaData;

module Images = Query_Images.Images;

let useImages = Query_Images.useImages;

module Pages = {
  module Library = Query_Pages_Library.LibraryPages;
  let useLibraryPages = Query_Pages_Library.useLibraryPages;

  module Software = Query_Pages_Software.SoftwarePages;
  let useSoftwarePages = Query_Pages_Software.useSoftwarePages;

  module Woodworking = Query_Pages_Woodworking.WoodworkingPages;
  let useWoodworkingPages = Query_Pages_Woodworking.useWoodworkingPages;
};
