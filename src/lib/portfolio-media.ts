const publicAssetOrigin = "https://glory-bobby-bassey.lovable.app";

export function publicPortfolioAsset(path: string) {
  return new URL(path, publicAssetOrigin).href;
}

export function drivePreview(link: string) {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/view\/?$/, "/preview");
  url.search = "";
  return url.href;
}