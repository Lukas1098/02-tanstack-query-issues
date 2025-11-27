import { githubApi } from "../../api/github.api";
import { GithubIssue } from "../../types/issue";

export const getIssueComments = async (issueNumber: number): Promise<GithubIssue[]> => {
    const { data } = await githubApi.get<GithubIssue[]>(`/issues/${issueNumber}/comments`);

    return data;
}