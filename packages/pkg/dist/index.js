// index.ts
import { createClient } from "@redis/client";
var client = createClient({
  socket: {
    hostname: "localhost",
    port: 6379
  }
});
function getClient() {
  return client;
}
export {
  getClient
};
