import { constructAppUrl } from "~/common/constructAppUrl.ts";

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
