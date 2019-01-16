import axios from "@/services/client";
import MockAdapter from "axios-mock-adapter";
import tags from "./tags";
import notes from "./notes";

// This sets the mock adapter on the client instance
const mock = new MockAdapter(axios);

// Mock any GET request to /tags
// arguments for reply are (status, data, headers)
mock.onGet("/tags").reply(200, {
  tags
});

mock.onGet("/tags/*").reply(200, {
  tags
});

mock.onGet("/notes").reply(200, {
  notes
});

mock.onGet("/notes/*").reply(200, {
  notes
});
