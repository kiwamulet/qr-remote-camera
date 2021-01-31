function constructAppUrl(
  baseUrl: string,
  roomId: string,
  signalingKey?: string
): URL {
  const appUrl = new URL(baseUrl);
  appUrl.searchParams.append("roomId", roomId);
  if (signalingKey) {
    appUrl.searchParams.append("signalingKey", signalingKey);
  }
  return appUrl;
}

function parseAppUrl(appUrl: URL) {
  return {
    roomId: appUrl.searchParams.get("roomId"),
    signalingKey: appUrl.searchParams.get("signalingKey"),
    baseSenderUrl: appUrl.origin + appUrl.pathname,
  };
}

export { constructAppUrl, parseAppUrl };
