test("values in the .env file are defined", () => {
  const { ROOM_ID, SIGNALING_KEY, BASE_SENDER_URL } = process.env;
  expect(ROOM_ID).toBeDefined();
  expect(SIGNALING_KEY).toBeDefined();
  expect(BASE_SENDER_URL).toBeDefined();
  expect(ROOM_ID && SIGNALING_KEY && BASE_SENDER_URL).not.toBeFalsy();
});
