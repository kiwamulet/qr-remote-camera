import { constructAppUrl, parseAppUrl } from "~/common/appUrlUtils";

test("can construct application URL", () => {
  const ROOM_ID = "foo@bar";
  const SIGNALING_KEY = "Lorem0ipsum0dolor0sit_amet0";
  const BASE_SENDER_URL = "https://ayame-labo.shiguredo.jp/samples/sendonly";
  const appUrl = constructAppUrl(BASE_SENDER_URL, ROOM_ID, SIGNALING_KEY);
  expect(appUrl.searchParams.get("roomId")).toBe(ROOM_ID);
  expect(appUrl.searchParams.get("signalingKey")).toBe(SIGNALING_KEY);
  expect(appUrl.origin).toBe(new URL(BASE_SENDER_URL).origin);
  expect(appUrl.pathname).toBe(new URL(BASE_SENDER_URL).pathname);
});

test("can parse application URL", () => {
  const ROOM_ID = "foo@bar";
  const SIGNALING_KEY = "Lorem0ipsum0dolor0sit_amet0";
  const BASE_SENDER_URL = "https://ayame-labo.shiguredo.jp/samples/sendonly";
  const appUrl = constructAppUrl(BASE_SENDER_URL, ROOM_ID, SIGNALING_KEY);
  const { roomId, signalingKey, baseSenderUrl } = parseAppUrl(appUrl);
  expect(roomId).toBe(ROOM_ID);
  expect(signalingKey).toBe(SIGNALING_KEY);
  expect(baseSenderUrl).toBe(BASE_SENDER_URL);
});

test("parseAppUrl fails when malformed URL is given", () => {
  const malformedUrl = new URL("https://example.com?foo=bar");
  const { roomId, signalingKey, baseSenderUrl } = parseAppUrl(malformedUrl);
  expect(roomId).toBeNull();
  expect(signalingKey).toBeNull();
});
