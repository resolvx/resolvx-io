// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "clustering.mdx": () => import("../content/docs/clustering.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "gtm-overview.mdx": () => import("../content/docs/gtm-overview.mdx?collection=docs"), "health-checks.mdx": () => import("../content/docs/health-checks.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "policies.mdx": () => import("../content/docs/policies.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "records.mdx": () => import("../content/docs/records.mdx?collection=docs"), "zones.mdx": () => import("../content/docs/zones.mdx?collection=docs"), }),
};
export default browserCollections;