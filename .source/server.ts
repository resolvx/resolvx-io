// @ts-nocheck
import * as __fd_glob_11 from "../content/docs/zones.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/records.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/quickstart.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/policies.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/health-checks.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/gtm-overview.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/configuration.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/clustering.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/api.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"api.mdx": __fd_glob_1, "clustering.mdx": __fd_glob_2, "configuration.mdx": __fd_glob_3, "gtm-overview.mdx": __fd_glob_4, "health-checks.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "installation.mdx": __fd_glob_7, "policies.mdx": __fd_glob_8, "quickstart.mdx": __fd_glob_9, "records.mdx": __fd_glob_10, "zones.mdx": __fd_glob_11, });