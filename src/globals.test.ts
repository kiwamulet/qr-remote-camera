test("values in the .env file are defined", () => {
  const { BASE_ROOM_ID, SIGNALING_KEY, BASE_SENDER_URL } = process.env;
  expect(BASE_ROOM_ID).toBeDefined();
  expect(SIGNALING_KEY).toBeDefined();
  expect(BASE_SENDER_URL).toBeDefined();
  expect(BASE_ROOM_ID && SIGNALING_KEY && BASE_SENDER_URL).not.toBeFalsy();
});
