import { githubApi } from "../../api/github.api";
import { GithubIssue } from "../../types/issue";

export const getIssues = async (): Promise<GithubIssue[]> => {
    const { data } = await githubApi.get<GithubIssue[]>('/issues');

    return data;
}