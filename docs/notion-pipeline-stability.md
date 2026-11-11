# Notion publishing safety

## Publishing contract

- Only pages whose Status is exactly Published may be rendered. A complete database snapshot is required before applying changes. An unclassified Status is unpublished.
- Notion is the publication authority: only pages positively confirmed Published in the complete current database snapshot are public. Managed articles absent from that snapshot are excluded from output and recorded as `unverified`, never assumed deleted or Draft. Source files/assets remain recoverable. The sync does not attempt to read those pages outside the integration’s database access. When a page reappears as Published it is refreshed and republished. A failed or partial database query still stops the whole deployment.
- Draft/archived articles and their resources are excluded from disposable build input. Source Markdown and assets stay in Git, including historical duplicate paths for the same Notion ID. Previously published material remains in Git history; this is not history erasure.
- API, nested-block, pagination and image failures stop publishing. All changed articles are rendered in temporary directories before any source file is replaced. Failed runs do not commit or deploy.
- Existing article slugs remain fixed after title changes. New articles use a title plus full Notion page ID to avoid collisions. Historical duplicate URLs remain intact; publishing updates the canonical copy, while unpublishing hides every copy.
- Unchanged valid legacy cache entries remain usable to avoid a risky whole-site rewrite. This is not a full revalidation of every old article against Notion. Failed/empty legacy entries are retried. An empty result cannot overwrite a substantive existing body.
- New content does not add original Notion workspace links, and the sync does not log raw blocks or text bodies.

## Images and Pages size

Notion signing parameters no longer change image identity. Only known Notion S3 signing parameters are removed; external image transformation parameters stay significant. Downloads have a timeout, maximum size and redirect limit, are written atomically, and cannot fall back to expiring source URLs on failure. Actual image bytes are decoded within pixel limits rather than trusting Content-Type. An exact legacy URL-hash cache match can be reused across old bundles only after image validation and conflict checks; this recovers assets from historical title collisions without revisiting unavailable external servers.

Repository images are never removed by the optimization. After Hugo renders, `prepare-build.js` can omit only generated `image_<hash>` files that are byte-identical to another file in the same bundle, are not referenced anywhere in the scanned source or rendered output, and leave at least one copy. Article references, encoded references and cross-article references are preserved conservatively. Old unreferenced duplicate image URLs may stop being served; original bytes remain in Git. This is not general garbage collection.

The initial local production build had 1,981,544,280 bytes. Its audit found 2,824 unreferenced duplicate output assets totaling 1,050,200,876 bytes. After preserving Hugo-computed modification dates, the output is 931,343,711 bytes. All 644 sitemap URLs and their modification dates match the original build, and all 1,083 internal image references resolve. CI refuses output at or above 1,000,000,000 bytes. Recheck size as new posts accumulate; do not delete unique originals to make the check pass.

## Verification and recovery

Run `npm ci` and `npm test` (39 regression tests at stabilization). Staging captures Hugo-computed GitInfo dates before copying content, so source-relative metadata is preserved without changing source front matter. Production uses Node 20 and Hugo extended 0.169.0, pinned to the previously successful build. A local build without Notion secrets verifies committed content only:

```
node scripts/prepare-build.js stage content /tmp/hugo-content-fresh
hugo --gc --minify --buildFuture --contentDir /tmp/hugo-content-fresh --cleanDestinationDir
node scripts/prepare-build.js audit public content layouts static themes hugo.toml
node scripts/prepare-build.js compact public content layouts static themes hugo.toml
```

Use a fresh staging directory. `audit` is read-only; `compact` changes disposable `public` output only. Scan optional assets/data/config roots too when present.

CI tests before sync, builds before committing, stages only Notion-managed source/cache paths, and rejects stale branch heads or a failed push. Feature branches and pull requests build without Notion secrets and cannot deploy. Main deploys only after the artifact and latest source revision match. A failed sync/build leaves the previous deployed site intact. Repair the underlying failure and rerun the workflow; do not bypass the gates. An emergency rollback is a normal revert of the stabilization commit, followed by a verified workflow run, with no history rewrite.
