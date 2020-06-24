require('dotenv').config()
const argv = require('yargs').argv
const fs = require('fs')
const csv = require('csv-parser')
const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  baseUrl: process.env.GITHUB_ENDPOINT
})

if (argv.csv.length > 0) {
  archiveRepos()
} else {
  console.log('Invalid options passed\n')
  console.log('To use this script, you must specify a user: ')
  console.log('node archive-org-repos.js --csv <repos.csv>\n')
}

async function archiveRepos () {
  const csvPipe = fs.createReadStream(argv.csv).pipe(csv())
  csvPipe.on('data', async (row) => {
    try {
      octokit.repos.update({
        owner: row.organization,
        repo: row.repository
      })
    } catch (err) {
      console.log(err)
    }
  })
}
