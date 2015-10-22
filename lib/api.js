module.exports = {
  "DELETE": {
    "/admin/users/:user_id/authorizations": [],
    "/admin/users/:username": [],
    "/applications/:client_id/tokens": [],
    "/applications/:client_id/tokens/:access_token": [],
    "/authorizations/:id": [],
    "/gists/:gist_id/comments/:id": [],
    "/gists/:id": [],
    "/gists/:id/star": [],
    "/notifications/threads/:id/subscription": [],
    "/orgs/:org/hooks/:id": [],
    "/orgs/:org/members/:username": [],
    "/orgs/:org/memberships/:username": [],
    "/orgs/:org/migrations/:id/archive": [],
    "/orgs/:org/migrations/:id/repos/:repo_name/lock": [],
    "/orgs/:org/public_members/:username": [],
    "/repos/:owner/:repo": [],
    "/repos/:owner/:repo/collaborators/:username": [],
    "/repos/:owner/:repo/comments/:id": [],
    "/repos/:owner/:repo/contents/:path": [
      {
        "name": "path",
        "type": "string",
        "description": "<p><strong>Required</strong>. The content path.</p>\n"
      },
      {
        "name": "message",
        "type": "string",
        "description": "<p><strong>Required</strong>. The commit message.</p>\n"
      },
      {
        "name": "sha",
        "type": "string",
        "description": "<p><strong>Required</strong>. The blob SHA of the file being replaced.</p>\n"
      },
      {
        "name": "branch",
        "type": "string",
        "description": "<p>The branch name. Default: the repository’s default branch (usually <code>master</code>)</p>\n"
      }
    ],
    "/repos/:owner/:repo/downloads/:id": [],
    "/repos/:owner/:repo/git/refs/:ref": [],
    "/repos/:owner/:repo/hooks/:id": [],
    "/repos/:owner/:repo/issues/:number/labels": [],
    "/repos/:owner/:repo/issues/:number/labels/:name": [],
    "/repos/:owner/:repo/issues/comments/:id": [],
    "/repos/:owner/:repo/keys/:id": [],
    "/repos/:owner/:repo/labels/:name": [],
    "/repos/:owner/:repo/milestones/:number": [],
    "/repos/:owner/:repo/pulls/comments/:id": [],
    "/repos/:owner/:repo/releases/:id": [],
    "/repos/:owner/:repo/releases/assets/:id": [],
    "/repos/:owner/:repo/subscription": [],
    "/repos/octocat/Hello-World/git/refs/heads/feature-a": [],
    "/repos/octocat/Hello-World/git/refs/tags/v1.0": [],
    "/setup/api/settings/authorized-keys": [
      {
        "name": "authorized_key",
        "type": "string",
        "description": "<p><strong>Required</strong>. The path to the public SSH key.</p>\n"
      }
    ],
    "/teams/:id": [],
    "/teams/:id/members/:username": [],
    "/teams/:id/memberships/:username": [],
    "/teams/:id/repos/:owner/:repo": [],
    "/user/emails": [],
    "/user/following/:username": [],
    "/user/keys/:id": [],
    "/user/starred/:owner/:repo": [],
    "/user/subscriptions/:owner/:repo": [],
    "/users/:username/site_admin": [],
    "/users/:username/suspended": []
  },
  "GET": {
    "/applications/:client_id/tokens/:access_token": [],
    "/authorizations": [],
    "/authorizations/:id": [],
    "/emojis": [],
    "/enterprise/settings/license": [],
    "/enterprise/stats/:type": [],
    "/events": [],
    "/feeds": [],
    "/gists": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>\n"
      }
    ],
    "/gists/:gist_id/comments": [],
    "/gists/:gist_id/comments/:id": [],
    "/gists/:id": [],
    "/gists/:id/:sha": [],
    "/gists/:id/commits": [],
    "/gists/:id/forks": [],
    "/gists/:id/star": [],
    "/gists/public": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>\n"
      }
    ],
    "/gists/starred": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>\n"
      }
    ],
    "/gitignore/templates": [],
    "/gitignore/templates/C": [],
    "/issues": [
      {
        "name": "filter",
        "type": "string",
        "description": "<p>Indicates which sorts of issues to return. Can be one of:</p>\n<ul>\n<li><code>assigned</code>: Issues assigned to you</li>\n<li><code>created</code>: Issues created by you</li>\n<li><code>mentioned</code>: Issues mentioning you</li>\n<li><code>subscribed</code>: Issues you're subscribed to updates for</li>\n<li><code>all</code>: All issues the authenticated user can see, regardless of participation or creation\nDefault: <code>assigned</code></li>\n</ul>\n"
      },
      {
        "name": "state",
        "type": "string",
        "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>. Default: <code>open</code></p>\n"
      },
      {
        "name": "labels",
        "type": "string",
        "description": "<p>A list of comma separated label names.  Example: <code>bug,ui,@high</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/legacy/issues/search/:owner/:repository/:state/:keyword": [
      {
        "name": "state",
        "type": "string",
        "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code> or <code>closed</code>.</p>\n"
      },
      {
        "name": "keyword",
        "type": "string",
        "description": "<p>The search term.</p>\n"
      }
    ],
    "/legacy/repos/search/:keyword": [
      {
        "name": "keyword",
        "type": "string",
        "description": "<p>The search term</p>\n"
      },
      {
        "name": "language",
        "type": "string",
        "description": "<p>Filter results by language</p>\n"
      },
      {
        "name": "start_page",
        "type": "string",
        "description": "<p>The page number to fetch</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. One of <code>stars</code>, <code>forks</code>, or <code>updated</code>. Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort field. if <code>sort</code> param is provided. Can be either <code>asc</code> or <code>desc</code>.</p>\n"
      }
    ],
    "/legacy/user/email/:email": [
      {
        "name": "email",
        "type": "string",
        "description": "<p>The email address</p>\n"
      }
    ],
    "/legacy/user/search/:keyword": [
      {
        "name": "keyword",
        "type": "string",
        "description": "<p>The search term</p>\n"
      },
      {
        "name": "start_page",
        "type": "string",
        "description": "<p>The page number to fetch</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. One of <code>stars</code>, <code>forks</code>, or <code>updated</code>. Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort field. if <code>sort</code> param is provided. Can be either <code>asc</code> or <code>desc</code>.</p>\n"
      }
    ],
    "/licenses": [],
    "/licenses/mit": [],
    "/meta": [],
    "/networks/:owner/:repo/events": [],
    "/notifications": [
      {
        "name": "all",
        "type": "boolean",
        "description": "<p>If <code>true</code>, show notifications marked as read. Default: <code>false</code></p>\n"
      },
      {
        "name": "participating",
        "type": "boolean",
        "description": "<p>If <code>true</code>, only shows notifications in which the user is directly participating or mentioned. Default: <code>false</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Default: <code>Time.now</code></p>\n"
      },
      {
        "name": "before",
        "type": "string",
        "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/notifications/threads/:id": [],
    "/notifications/threads/:id/subscription": [],
    "/organizations": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>The integer ID of the last Organization that you've seen.</p>\n"
      }
    ],
    "/orgs/:org": [],
    "/orgs/:org/events": [],
    "/orgs/:org/hooks": [],
    "/orgs/:org/hooks/:id": [],
    "/orgs/:org/issues": [
      {
        "name": "filter",
        "type": "string",
        "description": "<p>Indicates which sorts of issues to return. Can be one of:</p>\n<ul>\n<li><code>assigned</code>: Issues assigned to you</li>\n<li><code>created</code>: Issues created by you</li>\n<li><code>mentioned</code>: Issues mentioning you</li>\n<li><code>subscribed</code>: Issues you're subscribed to updates for</li>\n<li><code>all</code>: All issues the authenticated user can see, regardless of participation or creation\nDefault: <code>assigned</code></li>\n</ul>\n"
      },
      {
        "name": "state",
        "type": "string",
        "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>. Default: <code>open</code></p>\n"
      },
      {
        "name": "labels",
        "type": "string",
        "description": "<p>A list of comma separated label names.  Example: <code>bug,ui,@high</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/orgs/:org/members": [],
    "/orgs/:org/members/:username": [],
    "/orgs/:org/memberships/:username": [],
    "/orgs/:org/migrations": [],
    "/orgs/:org/migrations/:id": [],
    "/orgs/:org/migrations/:id/archive": [],
    "/orgs/:org/public_members": [],
    "/orgs/:org/public_members/:username": [],
    "/orgs/:org/repos": [
      {
        "name": "type",
        "type": "string",
        "description": "<p>Can be one of <code>all</code>, <code>public</code>, <code>private</code>, <code>forks</code>, <code>sources</code>, <code>member</code>. Default: <code>all</code></p>\n"
      }
    ],
    "/orgs/:org/teams": [],
    "/rate_limit": [],
    "/repos/:owner/:repo": [],
    "/repos/:owner/:repo/:archive_format/:ref": [
      {
        "name": "archive_format",
        "type": "string",
        "description": "<p>Can be either <code>tarball</code> or <code>zipball</code>. Default: <code>tarball</code></p>\n"
      },
      {
        "name": "ref",
        "type": "string",
        "description": "<p>A valid Git reference. Default: the repository’s default branch (usually <code>master</code>)</p>\n"
      }
    ],
    "/repos/:owner/:repo/assignees": [],
    "/repos/:owner/:repo/assignees/:assignee": [],
    "/repos/:owner/:repo/branches": [],
    "/repos/:owner/:repo/branches/:branch": [],
    "/repos/:owner/:repo/collaborators": [],
    "/repos/:owner/:repo/collaborators/:username": [],
    "/repos/:owner/:repo/comments": [],
    "/repos/:owner/:repo/comments/:id": [],
    "/repos/:owner/:repo/commits": [
      {
        "name": "sha",
        "type": "string",
        "description": "<p>SHA or branch to start listing commits from. Default: the repository’s default branch (usually <code>master</code>).</p>\n"
      },
      {
        "name": "path",
        "type": "string",
        "description": "<p>Only commits containing this file path will be returned.</p>\n"
      },
      {
        "name": "author",
        "type": "string",
        "description": "<p>GitHub login or email address by which to filter by commit author.</p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only commits after this date will be returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      },
      {
        "name": "until",
        "type": "string",
        "description": "<p>Only commits before this date will be returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/commits/:ref/comments": [],
    "/repos/:owner/:repo/commits/:ref/status": [
      {
        "name": "ref",
        "type": "string",
        "description": "<p><strong>Required</strong>. Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.</p>\n"
      }
    ],
    "/repos/:owner/:repo/commits/:ref/statuses": [
      {
        "name": "ref",
        "type": "string",
        "description": "<p><strong>Required</strong>. Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.</p>\n"
      }
    ],
    "/repos/:owner/:repo/commits/:sha": [],
    "/repos/:owner/:repo/compare/:base...:head": [],
    "/repos/:owner/:repo/compare/hubot:branchname...octocat:branchname": [],
    "/repos/:owner/:repo/contents/:path": [
      {
        "name": "path",
        "type": "string",
        "description": "<p>The content path.</p>\n"
      },
      {
        "name": "ref",
        "type": "string",
        "description": "<p>The name of the commit/branch/tag. Default: the repository’s default branch (usually <code>master</code>)</p>\n"
      }
    ],
    "/repos/:owner/:repo/contributors": [
      {
        "name": "anon",
        "type": "string",
        "description": "<p>Set to <code>1</code> or <code>true</code> to include anonymous contributors in results.</p>\n"
      }
    ],
    "/repos/:owner/:repo/deployments": [],
    "/repos/:owner/:repo/deployments/:id/statuses": [
      {
        "name": "id",
        "type": "integer",
        "description": "<p><strong>Required</strong>. The Deployment ID to list the statuses from.</p>\n"
      }
    ],
    "/repos/:owner/:repo/downloads": [],
    "/repos/:owner/:repo/downloads/:id": [],
    "/repos/:owner/:repo/events": [],
    "/repos/:owner/:repo/forks": [
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort order. Can be either <code>newest</code>, <code>oldest</code>, or <code>stargazers</code>. Default: <code>newest</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/git/blobs/:sha": [],
    "/repos/:owner/:repo/git/commits/:sha": [],
    "/repos/:owner/:repo/git/refs": [],
    "/repos/:owner/:repo/git/refs/:ref": [],
    "/repos/:owner/:repo/git/refs/heads/skunkworkz/featureA": [],
    "/repos/:owner/:repo/git/refs/tags": [],
    "/repos/:owner/:repo/git/tags/:sha": [],
    "/repos/:owner/:repo/git/trees/:sha": [],
    "/repos/:owner/:repo/git/trees/:sha?recursive=1": [],
    "/repos/:owner/:repo/hooks": [],
    "/repos/:owner/:repo/hooks/:id": [],
    "/repos/:owner/:repo/issues": [
      {
        "name": "milestone",
        "type": "integer || string",
        "description": "<p>If an <code>integer</code> is passed, it should refer to a milestone by its <code>number</code> field. If the string <code>*</code> is passed, issues with any milestone are accepted. If the string <code>none</code> is passed, issues without milestones are returned.</p>\n"
      },
      {
        "name": "state",
        "type": "string",
        "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>. Default: <code>open</code></p>\n"
      },
      {
        "name": "assignee",
        "type": "string",
        "description": "<p>Can be the name of a user. Pass in <code>none</code> for issues with no assigned user, and <code>*</code> for issues assigned to any user.</p>\n"
      },
      {
        "name": "creator",
        "type": "string",
        "description": "<p>The user that created the issue.</p>\n"
      },
      {
        "name": "mentioned",
        "type": "string",
        "description": "<p>A user that's mentioned in the issue.</p>\n"
      },
      {
        "name": "labels",
        "type": "string",
        "description": "<p>A list of comma separated label names.  Example: <code>bug,ui,@high</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/:issue_number/events": [],
    "/repos/:owner/:repo/issues/:number": [],
    "/repos/:owner/:repo/issues/:number/comments": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/:number/labels": [],
    "/repos/:owner/:repo/issues/comments": [
      {
        "name": "sort",
        "type": "string",
        "description": "<p>Either <code>created</code> or <code>updated</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>Either <code>asc</code> or <code>desc</code>. Ignored without the <code>sort</code> parameter.</p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/comments/:id": [],
    "/repos/:owner/:repo/issues/events": [],
    "/repos/:owner/:repo/issues/events/:id": [],
    "/repos/:owner/:repo/keys": [],
    "/repos/:owner/:repo/keys/:id": [],
    "/repos/:owner/:repo/labels": [],
    "/repos/:owner/:repo/labels/:name": [],
    "/repos/:owner/:repo/languages": [],
    "/repos/:owner/:repo/license": [],
    "/repos/:owner/:repo/milestones": [
      {
        "name": "state",
        "type": "string",
        "description": "<p>The state of the milestone. Either <code>open</code>, <code>closed</code>, or <code>all</code>. Default: <code>open</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Either <code>due_date</code> or <code>completeness</code>. Default: <code>due_date</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Either <code>asc</code> or <code>desc</code>. Default: <code>asc</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/milestones/:number": [],
    "/repos/:owner/:repo/milestones/:number/labels": [],
    "/repos/:owner/:repo/notifications": [
      {
        "name": "all",
        "type": "boolean",
        "description": "<p>If <code>true</code>, show notifications marked as read. Default: <code>false</code></p>\n"
      },
      {
        "name": "participating",
        "type": "boolean",
        "description": "<p>If <code>true</code>, only shows notifications in which the user is directly participating or mentioned. Default: <code>false</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Default: <code>Time.now</code></p>\n"
      },
      {
        "name": "before",
        "type": "string",
        "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/pages": [],
    "/repos/:owner/:repo/pages/builds": [],
    "/repos/:owner/:repo/pages/builds/latest": [],
    "/repos/:owner/:repo/pulls": [
      {
        "name": "state",
        "type": "string",
        "description": "<p>Either <code>open</code>, <code>closed</code>, or <code>all</code> to filter by state. Default: <code>open</code></p>\n"
      },
      {
        "name": "head",
        "type": "string",
        "description": "<p>Filter pulls by head user and branch name in the format of <code>user:ref-name</code>. Example: <code>github:new-script-format</code>.</p>\n"
      },
      {
        "name": "base",
        "type": "string",
        "description": "<p>Filter pulls by base branch name. Example: <code>gh-pages</code>.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>popularity</code> (comment count) or <code>long-running</code> (age, filtering by pulls updated in the last month). Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>. Default: <code>desc</code> when sort is <code>created</code> or sort is not specified, otherwise <code>asc</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/pulls/:number": [],
    "/repos/:owner/:repo/pulls/:number/comments": [],
    "/repos/:owner/:repo/pulls/:number/commits": [],
    "/repos/:owner/:repo/pulls/:number/files": [],
    "/repos/:owner/:repo/pulls/:number/merge": [],
    "/repos/:owner/:repo/pulls/comments": [
      {
        "name": "sort",
        "type": "string",
        "description": "<p>Can be either <code>created</code> or <code>updated</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>Can be either <code>asc</code> or <code>desc</code>. Ignored without <code>sort</code> parameter.</p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/pulls/comments/:id": [],
    "/repos/:owner/:repo/readme": [
      {
        "name": "ref",
        "type": "string",
        "description": "<p>The name of the commit/branch/tag. Default: the repository’s default branch (usually <code>master</code>)</p>\n"
      }
    ],
    "/repos/:owner/:repo/releases": [],
    "/repos/:owner/:repo/releases/:id": [],
    "/repos/:owner/:repo/releases/:id/assets": [],
    "/repos/:owner/:repo/releases/assets/:id": [],
    "/repos/:owner/:repo/releases/latest": [],
    "/repos/:owner/:repo/releases/tags/:tag": [],
    "/repos/:owner/:repo/stargazers": [],
    "/repos/:owner/:repo/stats/code_frequency": [],
    "/repos/:owner/:repo/stats/commit_activity": [],
    "/repos/:owner/:repo/stats/contributors": [],
    "/repos/:owner/:repo/stats/participation": [],
    "/repos/:owner/:repo/stats/punch_card": [],
    "/repos/:owner/:repo/subscribers": [],
    "/repos/:owner/:repo/subscription": [],
    "/repos/:owner/:repo/tags": [],
    "/repos/:owner/:repo/teams": [],
    "/repositories": [],
    "/search/code": [
      {
        "name": "q",
        "type": "string",
        "description": "<p>The search terms.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. Can only be <code>indexed</code>, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      }
    ],
    "/search/issues": [
      {
        "name": "q",
        "type": "string",
        "description": "<p>The search terms.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. Can be <code>comments</code>, <code>created</code>, or <code>updated</code>. Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      }
    ],
    "/search/repositories": [
      {
        "name": "q",
        "type": "string",
        "description": "<p>The search keywords, as well as any qualifiers.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. One of <code>stars</code>, <code>forks</code>, or <code>updated</code>. Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      }
    ],
    "/search/users": [
      {
        "name": "q",
        "type": "string",
        "description": "<p>The search terms.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>The sort field. Can be <code>followers</code>, <code>repositories</code>, or <code>joined</code>.  Default: results are sorted by best match.</p>\n"
      },
      {
        "name": "order",
        "type": "string",
        "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      }
    ],
    "/setup/api/configcheck": [],
    "/setup/api/maintenance": [],
    "/setup/api/settings": [],
    "/setup/api/settings/authorized-keys": [],
    "/teams/:id": [],
    "/teams/:id/members": [],
    "/teams/:id/members/:username": [],
    "/teams/:id/memberships/:username": [],
    "/teams/:id/repos": [],
    "/teams/:id/repos/:owner/:repo": [],
    "/user": [],
    "/user/emails": [],
    "/user/followers": [],
    "/user/following": [],
    "/user/following/:username": [],
    "/user/issues": [
      {
        "name": "filter",
        "type": "string",
        "description": "<p>Indicates which sorts of issues to return. Can be one of:</p>\n<ul>\n<li><code>assigned</code>: Issues assigned to you</li>\n<li><code>created</code>: Issues created by you</li>\n<li><code>mentioned</code>: Issues mentioning you</li>\n<li><code>subscribed</code>: Issues you're subscribed to updates for</li>\n<li><code>all</code>: All issues the authenticated user can see, regardless of participation or creation\nDefault: <code>assigned</code></li>\n</ul>\n"
      },
      {
        "name": "state",
        "type": "string",
        "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>. Default: <code>open</code></p>\n"
      },
      {
        "name": "labels",
        "type": "string",
        "description": "<p>A list of comma separated label names.  Example: <code>bug,ui,@high</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>. Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>. Default: <code>desc</code></p>\n"
      },
      {
        "name": "since",
        "type": "string",
        "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/user/keys": [],
    "/user/keys/:id": [],
    "/user/memberships/orgs": [],
    "/user/memberships/orgs/:org": [],
    "/user/orgs": [],
    "/user/repos": [
      {
        "name": "visibility",
        "type": "string",
        "description": "<p>Can be one of <code>all</code>, <code>public</code>, or <code>private</code>. Default: <code>all</code></p>\n"
      },
      {
        "name": "affiliation",
        "type": "string",
        "description": "<p>Comma-separated list of values. Can include:</p>\n<ul>\n<li><code>owner</code>: Repositories that are owned by the authenticated user.</li>\n<li><code>collaborator</code>: Repositories that the user has been added to as a collaborator.</li>\n<li><code>organization_member</code>: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.</li>\n</ul>\n<p>Default: <code>owner,collaborator,organization_member</code></p>\n"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Can be one of <code>all</code>, <code>owner</code>, <code>public</code>, <code>private</code>, <code>member</code>. Default: <code>all</code></p>\n<p>Will cause a <code>422</code> error if used in the same request as <strong>visibility</strong> or <strong>affiliation</strong>.</p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>Can be one of <code>asc</code> or <code>desc</code>. Default: when using <code>full_name</code>: <code>asc</code>; otherwise <code>desc</code></p>\n"
      }
    ],
    "/user/starred": [
      {
        "name": "sort",
        "type": "string",
        "description": "<p>One of <code>created</code> (when the repository was starred) or <code>updated</code> (when it was last pushed to). Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>One of <code>asc</code> (ascending) or <code>desc</code> (descending). Default: <code>desc</code></p>\n"
      }
    ],
    "/user/starred/:owner/:repo": [],
    "/user/subscriptions": [],
    "/user/subscriptions/:owner/:repo": [],
    "/user/teams": [],
    "/users": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>The integer ID of the last User that you've seen.</p>\n"
      }
    ],
    "/users/:username": [],
    "/users/:username/events": [],
    "/users/:username/events/orgs/:org": [],
    "/users/:username/events/public": [],
    "/users/:username/followers": [],
    "/users/:username/following": [],
    "/users/:username/following/:target_user": [],
    "/users/:username/gists": [
      {
        "name": "since",
        "type": "string",
        "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>\n"
      }
    ],
    "/users/:username/keys": [],
    "/users/:username/orgs": [],
    "/users/:username/received_events": [],
    "/users/:username/received_events/public": [],
    "/users/:username/repos": [
      {
        "name": "type",
        "type": "string",
        "description": "<p>Can be one of <code>all</code>, <code>owner</code>, <code>member</code>. Default: <code>owner</code></p>\n"
      },
      {
        "name": "sort",
        "type": "string",
        "description": "<p>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>Can be one of <code>asc</code> or <code>desc</code>. Default: when using <code>full_name</code>: <code>asc</code>, otherwise <code>desc</code></p>\n"
      }
    ],
    "/users/:username/starred": [
      {
        "name": "sort",
        "type": "string",
        "description": "<p>One of <code>created</code> (when the repository was starred) or <code>updated</code> (when it was last pushed to). Default: <code>created</code></p>\n"
      },
      {
        "name": "direction",
        "type": "string",
        "description": "<p>One of <code>asc</code> (ascending) or <code>desc</code> (descending). Default: <code>desc</code></p>\n"
      }
    ],
    "/users/:username/subscriptions": []
  },
  "PATCH": {
    "/admin/ldap/teams/:team_id/mapping": [],
    "/admin/ldap/users/:username/mapping": [],
    "/admin/users/:user_id": [
      {
        "name": "login",
        "type": "string",
        "description": "<p><strong>Required.</strong> The user's new username.</p>\n"
      }
    ],
    "/authorizations/:id": [
      {
        "name": "scopes",
        "type": "array",
        "description": "<p>Replaces the authorization scopes with these.</p>\n"
      },
      {
        "name": "add_scopes",
        "type": "array",
        "description": "<p>A list of scopes to add to this authorization.</p>\n"
      },
      {
        "name": "remove_scopes",
        "type": "array",
        "description": "<p>A list of scopes to remove from this authorization.</p>\n"
      },
      {
        "name": "note",
        "type": "string",
        "description": "<p>A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.</p>\n"
      },
      {
        "name": "note_url",
        "type": "string",
        "description": "<p>A URL to remind you what app the OAuth token is for.</p>\n"
      },
      {
        "name": "fingerprint",
        "type": "string",
        "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>\n"
      }
    ],
    "/gists/:gist_id/comments/:id": [],
    "/gists/:id": [],
    "/notifications/threads/:id": [],
    "/orgs/:org": [],
    "/orgs/:org/hooks/:id": [
      {
        "name": "config",
        "type": "object",
        "description": "<p><strong>Required</strong>. Key/value pairs to provide settings for this webhook. <a href=\"#update-hook-config-params\">These are defined below</a>.</p>\n"
      },
      {
        "name": "events",
        "type": "array",
        "description": "<p>Determines what [events][event-types] the hook is triggered for.  Default: <code>[&quot;push&quot;]</code>.</p>\n"
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "<p>Determines whether the hook is actually triggered on pushes.</p>\n"
      }
    ],
    "/repos/:owner/:repo": [],
    "/repos/:owner/:repo/comments/:id": [],
    "/repos/:owner/:repo/git/refs/:ref": [
      {
        "name": "sha",
        "type": "type",
        "description": "<p><strong>Required</strong>. The SHA1 value to set this reference to</p>\n"
      },
      {
        "name": "force",
        "type": "boolean",
        "description": "<p>Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to <code>false</code> will make sure you're not overwriting work. Default: <code>false</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/hooks/:id": [
      {
        "name": "config",
        "type": "object",
        "description": "<p>Key/value pairs to provide settings for this hook.  Modifying this will replace the entire config object.  These settings vary between the services and are defined in the <a href=\"https://github.com/github/github-services\">github-services</a> repository. Booleans are stored internally as &quot;1&quot; for true, and &quot;0&quot; for false.  Any JSON <code>true</code>/<code>false</code> values will be converted automatically.</p>\n"
      },
      {
        "name": "events",
        "type": "array",
        "description": "<p>Determines what events the hook is triggered for.  This replaces the entire array of events.  Default: <code>[&quot;push&quot;]</code></p>\n"
      },
      {
        "name": "add_events",
        "type": "array",
        "description": "<p>Determines a list of events to be added to the list of events that the Hook triggers for.</p>\n"
      },
      {
        "name": "remove_events",
        "type": "array",
        "description": "<p>Determines a list of events to be removed from the list of events that the Hook triggers for.</p>\n"
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "<p>Determines whether the hook is actually triggered on pushes.</p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/:number": [
      {
        "name": "title",
        "type": "string",
        "description": "<p>The title of the issue.</p>\n"
      },
      {
        "name": "body",
        "type": "string",
        "description": "<p>The contents of the issue.</p>\n"
      },
      {
        "name": "assignee",
        "type": "string",
        "description": "<p>Login for the user that this issue should be assigned to.</p>\n"
      },
      {
        "name": "state",
        "type": "string",
        "description": "<p>State of the issue. Either <code>open</code> or <code>closed</code>.</p>\n"
      },
      {
        "name": "milestone",
        "type": "integer",
        "description": "<p>The <code>number</code> of the milestone to associate this issue with or <code>null</code> to remove current. <em>NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise.</em></p>\n"
      },
      {
        "name": "labels",
        "type": "array<string>",
        "description": "<p>Labels to associate with this issue. Pass one or more Labels to <em>replace</em> the set of Labels on this Issue. Send an empty array (<code>[]</code>) to clear all Labels from the Issue. <em>NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise.</em></p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/comments/:id": [],
    "/repos/:owner/:repo/labels/:name": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. The name of the label.</p>\n"
      },
      {
        "name": "color",
        "type": "string",
        "description": "<p><strong>Required</strong>.  A 6 character hex code, without the leading <code>#</code>, identifying the color.</p>\n"
      }
    ],
    "/repos/:owner/:repo/milestones/:number": [],
    "/repos/:owner/:repo/pulls/:number": [],
    "/repos/:owner/:repo/pulls/comments/:id": [],
    "/repos/:owner/:repo/releases/:id": [],
    "/repos/:owner/:repo/releases/assets/:id": [],
    "/teams/:id": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. The name of the team.</p>\n"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>The description of the team.</p>\n"
      },
      {
        "name": "privacy",
        "type": "string",
        "description": "<p>The level of privacy this team should have. Can be one of:</p>\n<ul>\n<li><code>secret</code> - only visible to organization owners and members of this team.</li>\n<li><code>closed</code> - visible to all members of this organization.\nDefault: <code>secret</code>\n<strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></li>\n</ul>\n"
      },
      {
        "name": "permission",
        "type": "string",
        "description": "<p><strong>Deprecated</strong>. In the preview period described in the alert below, a team's <code>permission</code> attribute no longer dictates what permission it has on its repositories; it only dictates what permission a new repository will be added to the team with if none is specified by the user. Avoid confusion by specifying a <code>permission</code> when using the <a href=\"/v3/orgs/teams/#add-team-repo\">Add team repository</a> API instead.</p>\n<p>The permission to grant the team. Can be one of:</p>\n<ul>\n<li><code>pull</code> - team members can pull, but not push to or administer these repositories.</li>\n<li><code>push</code> - team members can pull and push, but not administer these repositories.</li>\n<li><code>admin</code> - team members can pull, push and administer these repositories. Default: <code>pull</code></li>\n</ul>\n"
      }
    ],
    "/user": [
      {
        "name": "name",
        "type": "string",
        "description": "<p>The new name of the user</p>\n"
      },
      {
        "name": "email",
        "type": "string",
        "description": "<p>Publicly visible email address.</p>\n"
      },
      {
        "name": "blog",
        "type": "string",
        "description": "<p>The new blog URL of the user.</p>\n"
      },
      {
        "name": "company",
        "type": "string",
        "description": "<p>The new company of the user.</p>\n"
      },
      {
        "name": "location",
        "type": "string",
        "description": "<p>The new location of the user.</p>\n"
      },
      {
        "name": "hireable",
        "type": "boolean",
        "description": "<p>The new hiring availability of the user.</p>\n"
      },
      {
        "name": "bio",
        "type": "string",
        "description": "<p>The new short biography of the user.</p>\n"
      }
    ],
    "/user/memberships/orgs/:org": []
  },
  "POST": {
    "/admin/ldap/teams/:team_id/sync": [],
    "/admin/ldap/users/:username/sync": [],
    "/admin/organizations": [
      {
        "name": "login",
        "type": "string",
        "description": "<p><strong>Required.</strong> The organization's username.</p>\n"
      },
      {
        "name": "admin",
        "type": "string",
        "description": "<p><strong>Required.</strong> The login of the user who will manage this organization.</p>\n"
      },
      {
        "name": "profile_name",
        "type": "string",
        "description": "<p>The organization's display name.</p>\n"
      }
    ],
    "/admin/users": [
      {
        "name": "login",
        "type": "string",
        "description": "<p><strong>Required.</strong> The user's username.</p>\n"
      },
      {
        "name": "email",
        "type": "string",
        "description": "<p><strong>Required.</strong> The user's email address.</p>\n"
      }
    ],
    "/admin/users/:user_id/authorizations": [
      {
        "name": "scopes",
        "type": "array",
        "description": "<p>A list of <a href=\"/v3/oauth/#scopes\">scopes</a>.</p>\n"
      }
    ],
    "/applications/:client_id/tokens/:access_token": [],
    "/authorizations": [
      {
        "name": "scopes",
        "type": "array",
        "description": "<p>A list of scopes that this authorization is in.</p>\n"
      },
      {
        "name": "note",
        "type": "string",
        "description": "<p><strong>Required</strong>. A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.</p>\n"
      },
      {
        "name": "note_url",
        "type": "string",
        "description": "<p>A URL to remind you what app the OAuth token is for.</p>\n"
      },
      {
        "name": "client_id",
        "type": "string",
        "description": "<p>The 20 character OAuth app client key for which to create the token.</p>\n"
      },
      {
        "name": "client_secret",
        "type": "string",
        "description": "<p>The 40 character OAuth app client secret for which to create the token.</p>\n"
      },
      {
        "name": "fingerprint",
        "type": "string",
        "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>\n"
      }
    ],
    "/gists": [],
    "/gists/:gist_id/comments": [
      {
        "name": "body",
        "type": "string",
        "description": "<p><strong>Required</strong>. The comment text.</p>\n"
      }
    ],
    "/gists/:id/forks": [],
    "/markdown": [
      {
        "name": "text",
        "type": "string",
        "description": "<p><strong>Required</strong>.The Markdown text to render</p>\n"
      },
      {
        "name": "mode",
        "type": "string",
        "description": "<p>The rendering mode. Can be either:</p>\n<ul>\n<li><code>markdown</code> to render a document as plain Markdown, just like README files are rendered.</li>\n<li><code>gfm</code> to render a document as user-content, <em>e.g.</em> like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.\nDefault: <code>markdown</code></li>\n</ul>\n"
      },
      {
        "name": "context",
        "type": "string",
        "description": "<p>The repository context. Only taken into account when rendering as <code>gfm</code></p>\n"
      }
    ],
    "/markdown/raw": [],
    "/orgs/:org/hooks": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. Must be passed as &quot;web&quot;.</p>\n"
      },
      {
        "name": "config",
        "type": "object",
        "description": "<p><strong>Required</strong>. Key/value pairs to provide settings for this webhook. <a href=\"#create-hook-config-params\">These are defined below</a>.</p>\n"
      },
      {
        "name": "events",
        "type": "array",
        "description": "<p>Determines what [events][event-types] the hook is triggered for.  Default: <code>[&quot;push&quot;]</code>.</p>\n"
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "<p>Determines whether the hook is actually triggered on pushes.</p>\n"
      }
    ],
    "/orgs/:org/hooks/:id/pings": [],
    "/orgs/:org/migrations": [
      {
        "name": "repositories",
        "type": "array<string>",
        "description": "<p><strong>Required</strong>. A list of arrays indicating which repositories should be migrated.</p>\n"
      },
      {
        "name": "lock_repositories",
        "type": "boolean",
        "description": "<p>Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: <code>false</code>.</p>\n"
      },
      {
        "name": "exclude_attachments",
        "type": "boolean",
        "description": "<p>Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: <code>false</code>.</p>\n"
      }
    ],
    "/orgs/:org/repos": [],
    "/orgs/:org/teams": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. The name of the team.</p>\n"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>The description of the team.</p>\n"
      },
      {
        "name": "repo_names",
        "type": "array<string>",
        "description": "<p>The repositories to add the team to.</p>\n"
      },
      {
        "name": "privacy",
        "type": "string",
        "description": "<p>The level of privacy this team should have. Can be one of:</p>\n<ul>\n<li><code>secret</code> - only visible to organization owners and members of this team.</li>\n<li><code>closed</code> - visible to all members of this organization.\nDefault: <code>secret</code>\n<strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></li>\n</ul>\n"
      },
      {
        "name": "permission",
        "type": "string",
        "description": "<p><strong>Deprecated</strong>. In the preview period described in the alert below, a team's <code>permission</code> attribute no longer dictates what permission it has on its repositories; it only dictates what permission the repositories in this request will be added with, and what permission a new repository will be added to the team with if none is specified by the user. Avoid confusion by specifying a <code>permission</code> when using the <a href=\"/v3/orgs/teams/#add-team-repo\">Add team repository</a> API instead.</p>\n<p>The permission to grant the team. Can be one of:</p>\n<ul>\n<li><code>pull</code> - team members can pull, but not push to or administer these repositories.</li>\n<li><code>push</code> - team members can pull and push, but not administer these repositories.</li>\n<li><code>admin</code> - team members can pull, push and administer these repositories.\nDefault: <code>pull</code></li>\n</ul>\n"
      }
    ],
    "/repos/:owner/:repo/commits/:sha/comments": [],
    "/repos/:owner/:repo/deployments": [
      {
        "name": "ref",
        "type": "string",
        "description": "<p><strong>Required</strong>. The ref to deploy. This can be a branch, tag, or sha.</p>\n"
      },
      {
        "name": "task",
        "type": "string",
        "description": "<p>Optional parameter to specify a task to execute, e.g. <code>deploy</code> or <code>deploy:migrations</code>. Default: <code>deploy</code></p>\n"
      },
      {
        "name": "auto_merge",
        "type": "boolean",
        "description": "<p>Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: <code>true</code></p>\n"
      },
      {
        "name": "required_contexts",
        "type": "array",
        "description": "<p>Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.</p>\n"
      },
      {
        "name": "payload",
        "type": "string",
        "description": "<p>Optional JSON payload with extra information about the deployment. Default: <code>&quot;&quot;</code></p>\n"
      },
      {
        "name": "environment",
        "type": "string",
        "description": "<p>Optional name for the target deployment environment (e.g., production, staging, qa). Default: <code>&quot;production&quot;</code></p>\n"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>Optional short description. Default: <code>&quot;&quot;</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/deployments/:id/statuses": [
      {
        "name": "state",
        "type": "string",
        "description": "<p><strong>Required</strong>. The state of the status. Can be one of <code>pending</code>, <code>success</code>, <code>error</code>, or <code>failure</code>.</p>\n"
      },
      {
        "name": "target_url",
        "type": "string",
        "description": "<p>The target URL to associate with this status.  This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: <code>&quot;&quot;</code></p>\n"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>A short description of the status. Default: <code>&quot;&quot;</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/forks": [
      {
        "name": "organization",
        "type": "string",
        "description": "<p>Optional parameter to specify the organization name if forking into an organization.</p>\n"
      }
    ],
    "/repos/:owner/:repo/git/blobs": [
      {
        "name": "content",
        "type": "string",
        "description": "<p><strong>Required</strong>. The new blob's content.</p>\n"
      },
      {
        "name": "encoding",
        "type": "string",
        "description": "<p>The encoding used for <code>content</code>. Currently, <code>&quot;utf-8&quot;</code> and <code>&quot;base64&quot;</code> are supported. Default: <code>&quot;utf-8&quot;</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/git/commits": [
      {
        "name": "message",
        "type": "string",
        "description": "<p><strong>Required</strong>. The commit message</p>\n"
      },
      {
        "name": "tree",
        "type": "string",
        "description": "<p><strong>Required</strong>. The SHA of the tree object this commit points to</p>\n"
      },
      {
        "name": "parents",
        "type": "array<string>",
        "description": "<p><strong>Required</strong>. The SHAs of the commits that were the parents of this commit.  If omitted or empty, the commit will be written as a root commit.  For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.</p>\n"
      }
    ],
    "/repos/:owner/:repo/git/refs": [
      {
        "name": "ref",
        "type": "type",
        "description": "<p><strong>Required</strong>. The name of the fully qualified reference (ie: <code>refs/heads/master</code>). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.</p>\n"
      },
      {
        "name": "sha",
        "type": "type",
        "description": "<p><strong>Required</strong>. The SHA1 value to set this reference to</p>\n"
      }
    ],
    "/repos/:owner/:repo/git/tags": [
      {
        "name": "tag",
        "type": "string",
        "description": "<p>The tag</p>\n"
      },
      {
        "name": "message",
        "type": "string",
        "description": "<p>The tag message</p>\n"
      },
      {
        "name": "object",
        "type": "string",
        "description": "<p>The SHA of the git object this is tagging</p>\n"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>The type of the object we're tagging. Normally this is a <code>commit</code> but it can also be a <code>tree</code> or a <code>blob</code>.</p>\n"
      },
      {
        "name": "tagger",
        "type": "object",
        "description": "<p>An object with information about the individual creating the tag.</p>\n"
      },
      {
        "name": "name",
        "type": "string",
        "description": "<p>The name of the author of the tag</p>\n"
      },
      {
        "name": "email",
        "type": "string",
        "description": "<p>The email of the author of the tag</p>\n"
      },
      {
        "name": "date",
        "type": "string",
        "description": "<p>When this object was tagged. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/git/trees": [
      {
        "name": "tree",
        "type": "array<object>",
        "description": "<p><strong>Required</strong>. Objects (of <code>path</code>, <code>mode</code>, <code>type</code>, and <code>sha</code>) specifying a tree structure</p>\n"
      },
      {
        "name": "base_tree",
        "type": "string",
        "description": "<p>The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.</p>\n"
      },
      {
        "name": "path",
        "type": "string",
        "description": "<p>The file referenced in the tree</p>\n"
      },
      {
        "name": "mode",
        "type": "string",
        "description": "<p>The file mode; one of <code>100644</code> for file (blob), <code>100755</code> for executable (blob), <code>040000</code> for subdirectory (tree), <code>160000</code> for submodule (commit), or <code>120000</code> for a blob that specifies the path of a symlink</p>\n"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Either <code>blob</code>, <code>tree</code>, or <code>commit</code></p>\n"
      },
      {
        "name": "sha",
        "type": "string",
        "description": "<p>The SHA1 checksum ID of the object in the tree</p>\n"
      },
      {
        "name": "content",
        "type": "string",
        "description": "<p>The content you want this file to have. GitHub will write this blob out and use that SHA for this entry.  Use either this, or <code>tree.sha</code>.</p>\n"
      }
    ],
    "/repos/:owner/:repo/hooks": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. Use <code>web</code> for a webhook or use the name of a valid service. (See &lt;a href='https://api.github.com/hooks' data-proofer-ignore&gt;/hooks&lt;/a&gt; for the list of valid service names.)</p>\n"
      },
      {
        "name": "config",
        "type": "object",
        "description": "<p><strong>Required</strong>. Key/value pairs to provide settings for this hook.  These settings vary between the services and are defined in the <a href=\"https://github.com/github/github-services\">github-services</a> repository. Booleans are stored internally as &quot;1&quot; for true, and &quot;0&quot; for false.  Any JSON <code>true</code>/<code>false</code> values will be converted automatically.</p>\n"
      },
      {
        "name": "events",
        "type": "array",
        "description": "<p>Determines what events the hook is triggered for.  Default: <code>[&quot;push&quot;]</code></p>\n"
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "<p>Determines whether the hook is actually triggered on pushes.</p>\n"
      }
    ],
    "/repos/:owner/:repo/hooks/:id/pings": [],
    "/repos/:owner/:repo/hooks/:id/tests": [],
    "/repos/:owner/:repo/issues": [
      {
        "name": "title",
        "type": "string",
        "description": "<p><strong>Required</strong>. The title of the issue.</p>\n"
      },
      {
        "name": "body",
        "type": "string",
        "description": "<p>The contents of the issue.</p>\n"
      },
      {
        "name": "assignee",
        "type": "string",
        "description": "<p>Login for the user that this issue should be assigned to. <em>NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise.</em></p>\n"
      },
      {
        "name": "milestone",
        "type": "integer",
        "description": "<p>The <code>number</code> of the milestone to associate this issue with. <em>NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise.</em></p>\n"
      },
      {
        "name": "labels",
        "type": "array<string>",
        "description": "<p>Labels to associate with this issue. <em>NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.</em></p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/:number/comments": [],
    "/repos/:owner/:repo/issues/:number/labels": [],
    "/repos/:owner/:repo/keys": [
      {
        "name": "title",
        "type": "string",
        "description": "<p>A name for the key.</p>\n"
      },
      {
        "name": "key",
        "type": "string",
        "description": "<p>The contents of the key.</p>\n"
      },
      {
        "name": "read_only",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.</p>\n"
      }
    ],
    "/repos/:owner/:repo/labels": [
      {
        "name": "name",
        "type": "string",
        "description": "<p><strong>Required</strong>. The name of the label.</p>\n"
      },
      {
        "name": "color",
        "type": "string",
        "description": "<p><strong>Required</strong>.  A 6 character hex code, without the leading <code>#</code>, identifying the color.</p>\n"
      }
    ],
    "/repos/:owner/:repo/merges": [],
    "/repos/:owner/:repo/milestones": [],
    "/repos/:owner/:repo/pulls": [],
    "/repos/:owner/:repo/pulls/:number/comments": [],
    "/repos/:owner/:repo/releases": [],
    "/repos/:owner/:repo/statuses/:sha": [
      {
        "name": "state",
        "type": "string",
        "description": "<p><strong>Required</strong>. The state of the status. Can be one of <code>pending</code>, <code>success</code>, <code>error</code>, or <code>failure</code>.</p>\n"
      },
      {
        "name": "target_url",
        "type": "string",
        "description": "<p>The target URL to associate with this status.  This URL will be linked from the GitHub UI to allow users to easily see the 'source' of the Status.\nFor example, if your Continuous Integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:\n<code>http://ci.example.com/user/repo/build/sha</code>.</p>\n"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>A short description of the status.</p>\n"
      },
      {
        "name": "context",
        "type": "string",
        "description": "<p>A string label to differentiate this status from the status of other systems. Default: <code>&quot;default&quot;</code></p>\n"
      }
    ],
    "/setup/api/configure": [],
    "/setup/api/maintenance": [
      {
        "name": "maintenance",
        "type": "string",
        "description": "<p><strong>Required</strong>. A JSON string with the attributes <code>enabled</code> and <code>when</code>.</p>\n"
      }
    ],
    "/setup/api/settings/authorized-keys": [
      {
        "name": "authorized_key",
        "type": "string",
        "description": "<p><strong>Required</strong>. The path to the public SSH key.</p>\n"
      }
    ],
    "/setup/api/start": [
      {
        "name": "license",
        "type": "string",
        "description": "<p><strong>Required</strong>. The content of your <em>.ghl</em> license file.</p>\n"
      },
      {
        "name": "password",
        "type": "string",
        "description": "<p>You <strong>must</strong> provide a password <em>only if</em> you are uploading your license for the first time. If you previously set a password through the web interface, you don't need this parameter.</p>\n"
      },
      {
        "name": "settings",
        "type": "string",
        "description": "<p>Optional path to a JSON file containing your installation settings.</p>\n"
      }
    ],
    "/setup/api/upgrade": [
      {
        "name": "license",
        "type": "string",
        "description": "<p>The content of your new <em>.ghl</em> license file.</p>\n"
      }
    ],
    "/staff/indexing_jobs": [],
    "/user/emails": [],
    "/user/keys": [],
    "/user/repos": []
  },
  "PUT": {
    "/authorizations/clients/:client_id": [
      {
        "name": "client_secret",
        "type": "string",
        "description": "<p><strong>Required</strong>. The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>\n"
      },
      {
        "name": "scopes",
        "type": "array",
        "description": "<p>A list of scopes that this authorization is in.</p>\n"
      },
      {
        "name": "note",
        "type": "string",
        "description": "<p>A note to remind you what the OAuth token is for.</p>\n"
      },
      {
        "name": "note_url",
        "type": "string",
        "description": "<p>A URL to remind you what app the OAuth token is for.</p>\n"
      },
      {
        "name": "fingerprint",
        "type": "string",
        "description": "<p>A unique string to distinguish an authorization from others created for the same client and user. If provided, this API is functionally equivalent to <a href=\"/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint\">Get-or-create an authorization for a specific app and fingerprint</a>.</p>\n"
      }
    ],
    "/authorizations/clients/:client_id/:fingerprint": [
      {
        "name": "client_secret",
        "type": "string",
        "description": "<p><strong>Required</strong>. The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>\n"
      },
      {
        "name": "scopes",
        "type": "array",
        "description": "<p>A list of scopes that this authorization is in.</p>\n"
      },
      {
        "name": "note",
        "type": "string",
        "description": "<p>A note to remind you what the OAuth token is for.</p>\n"
      },
      {
        "name": "note_url",
        "type": "string",
        "description": "<p>A URL to remind you what app the OAuth token is for.</p>\n"
      }
    ],
    "/gists/:id/star": [],
    "/notifications": [
      {
        "name": "last_read_at",
        "type": "string",
        "description": "<p>Describes the last point that notifications were checked.  Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Default: <code>Time.now</code></p>\n"
      }
    ],
    "/notifications/threads/:id/subscription": [
      {
        "name": "subscribed",
        "type": "boolean",
        "description": "<p>Determines if notifications should be received from this thread</p>\n"
      },
      {
        "name": "ignored",
        "type": "boolean",
        "description": "<p>Determines if all notifications should be blocked from this thread</p>\n"
      }
    ],
    "/orgs/:org/memberships/:username": [
      {
        "name": "role",
        "type": "string",
        "description": "<p><strong>Required</strong>. The role to give the user in the organization. Can be one of:</p>\n<ul>\n<li><code>admin</code> - The user will become an owner of the organization.</li>\n<li><code>member</code> - The user will become a non-owner member of the organization. Use this only to demote an existing owner to a non-owner.</li>\n</ul>\n"
      }
    ],
    "/orgs/:org/public_members/:username": [],
    "/repos/:owner/:repo/collaborators/:username": [
      {
        "name": "permission",
        "type": "string",
        "description": "<p>The permission to grant the team. <strong>Only valid on organization-owned repositories.</strong> Can be one of:</p>\n<ul>\n<li><code>pull</code> - can pull, but not push to or administer this repository.</li>\n<li><code>push</code> - can pull and push, but not administer this repository.</li>\n<li><code>admin</code> -  can pull, push and administer this repository.\nDefault: <code>push</code>\n<strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></li>\n</ul>\n"
      }
    ],
    "/repos/:owner/:repo/contents/:path": [
      {
        "name": "path",
        "type": "string",
        "description": "<p><strong>Required</strong>. The content path.</p>\n"
      },
      {
        "name": "message",
        "type": "string",
        "description": "<p><strong>Required</strong>. The commit message.</p>\n"
      },
      {
        "name": "content",
        "type": "string",
        "description": "<p><strong>Required</strong>. The updated file content, Base64 encoded.</p>\n"
      },
      {
        "name": "sha",
        "type": "string",
        "description": "<p><strong>Required</strong>. The blob SHA of the file being replaced.</p>\n"
      },
      {
        "name": "branch",
        "type": "string",
        "description": "<p>The branch name. Default: the repository’s default branch (usually <code>master</code>)</p>\n"
      }
    ],
    "/repos/:owner/:repo/issues/:number/labels": [],
    "/repos/:owner/:repo/notifications": [
      {
        "name": "last_read_at",
        "type": "string",
        "description": "<p>Describes the last point that notifications were checked.  Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Default: <code>Time.now</code></p>\n"
      }
    ],
    "/repos/:owner/:repo/pulls/:number/merge": [],
    "/repos/:owner/:repo/subscription": [
      {
        "name": "subscribed",
        "type": "boolean",
        "description": "<p>Determines if notifications should be received from this repository.</p>\n"
      },
      {
        "name": "ignored",
        "type": "boolean",
        "description": "<p>Determines if all notifications should be blocked from this repository.</p>\n"
      }
    ],
    "/setup/api/settings": [
      {
        "name": "settings",
        "type": "string",
        "description": "<p><strong>Required</strong>. A JSON string with the new settings.</p>\n"
      }
    ],
    "/teams/:id/members/:username": [],
    "/teams/:id/memberships/:username": [
      {
        "name": "role",
        "type": "string",
        "description": "<p>The role that this user should have in the team. Can be one of:</p>\n<ul>\n<li><code>member</code> - a normal member of the team.</li>\n<li><code>maintainer</code> - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.\nDefault: <code>member</code>\n<strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></li>\n</ul>\n"
      }
    ],
    "/teams/:id/repos/:org/:repo": [
      {
        "name": "permission",
        "type": "string",
        "description": "<p>The permission to grant the team on this repository. Can be one of:</p>\n<ul>\n<li><code>pull</code> - team members can pull, but not push to or administer this repository.</li>\n<li><code>push</code> - team members can pull and push, but not administer this repository.</li>\n<li><code>admin</code> - team members can pull, push and administer this repository.</li>\n</ul>\n<p>If no permission is specified, the team's <code>permission</code> attribute will be used to determine what permission to grant the team on this repository.</p>\n<p><strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>\n"
      }
    ],
    "/user/following/:username": [],
    "/user/starred/:owner/:repo": [],
    "/user/subscriptions/:owner/:repo": [],
    "/users/:username/site_admin": [],
    "/users/:username/suspended": []
  }
}