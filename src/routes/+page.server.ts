import { request } from "@octokit/request"
import type { GithubPage } from "$lib/types"
import type { PageServerLoad } from "./$types"
import * as dotenv from 'dotenv'

dotenv.config()

const links = [
    'https://github.com/electronVolts-website/electronVolts-website.github.io',
    'https://github.com/icanc0/homebox',
    'https://github.com/FTC7393/sussy-factory',
    'https://github.com/icanc0/website-v4'
]

console.log("token" + process.env.GITHUB_TOKEN)

const requestWithAuth = request.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
})


export const load: PageServerLoad = async () => {
    let results = []
    for (const link of links) {
        console.log("get github" + link)
        
        let data = (await requestWithAuth('GET /repos/{owner}/{repo}', {
            owner: link.split("/")[3],
            repo: link.split("/")[4],
        })).data

        let result: GithubPage = {
            name: data.name,
            html_url: data.html_url,
            language: data.language,
            stars: data.stargazers_count,
            forks: data.forks_count,
            issues: data.open_issues_count,
            avatar_url: data.owner.avatar_url,
            user_url: data.owner.html_url,
            description: data.description == null ? "very cool repo" : data.description
        }
        results.push(result)
    }
    console.log(results)
    return {
        results
    }
}

