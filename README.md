# Archive Organization Owned Repositories

This Node script can be used on GitHub.com and GitHub Enterprise Server to archive a specified `.csv` of repositories the organization owns. It **requires** a GitHub Personal Access Token with the following scopes on a user that is an **organization owner** for every organization in the `.csv`:
  - `repo`

## How to run
- Install the node modules
  - `npm install`
- Create `.env` with needed variables based on `.env.example`
- Run the script and define the user
  - `node archive-org-repos.js --csv <repos.csv>`

## Caveats
This script requires that the `GITHUB_TOKEN` provided have the scopes listed above, and the user creating the token needs to be an owner of the organization where the repositories live.

This script will not archive personal user repositories, only organization owned repositories.
