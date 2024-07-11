import createClient from "@sanity/client";

const config = {
  projectId: "94vvmmp2",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: false,
};


const client = createClient(config);

export default client;