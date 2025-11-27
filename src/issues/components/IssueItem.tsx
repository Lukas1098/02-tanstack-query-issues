import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GithubIssue, State } from '../../types/issue';

interface Props {
  issue: GithubIssue
}

const getDaysAgo = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const now = new Date();

  const diffMs = now.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const IssueItem = ({ issue }: Props) => {
  const navigate = useNavigate();

  const daysAgo = getDaysAgo(issue.created_at);

  return (
    <div className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800">
      {
        issue.state === State.Close ?
          <FiCheckCircle size={30} color="green" />
          :
          <FiInfo size={30} color="red" className="min-w-10" />
      }

      <div className="flex flex-col flex-grow px-2">
        <a
          onClick={() => navigate(`/issues/issue/${issue.number}`)}
          className="hover:underline"
        >
          {issue.title}
        </a>
        <span className="text-gray-500">
          #{issue.number} opened {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago by{' '}
          <span className="font-bold">{issue.user.login}</span>
        </span>
      </div>

      <img
        src={issue.user.avatar_url}
        alt={issue.user.login}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </div>
  );
};
