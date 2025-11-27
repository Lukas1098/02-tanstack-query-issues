import { getIssue } from "../issues/actions/get-issue";
import { useQuery } from "@tanstack/react-query";
import { getIssueComments } from "../issues/actions/get-issue-comments";

export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ['issues', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60 * 60,
        retry: false
    })

    const commentsQuery = useQuery({
        queryKey: ['issues', issueQuery.data?.number, 'comments'],
        queryFn: () => getIssueComments(issueQuery.data!.number),
        staleTime: 1000 * 60 * 60,
        retry: false,
        enabled: issueQuery.data !== undefined,
    })

    return {
        issueQuery,
        commentsQuery
    }
}
