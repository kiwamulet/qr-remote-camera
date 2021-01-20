function constructAppUrl(
  baseUrl: string,
  roomId: string,
  signalingKey: string
): URL {
  const appUrl = new URL(baseUrl);
  appUrl.searchParams.append("roomId", roomId);
  appUrl.searchParams.append("signalingKey", signalingKey);
  return appUrl;
}

export { constructAppUrl };
