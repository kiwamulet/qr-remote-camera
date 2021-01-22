declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly ROOM_ID?: string;
    readonly SIGNALING_KEY?: string;
    readonly BASE_SENDER_URL?: string;
    readonly BASE_RECEIVER_URL?: string;
  }
}
