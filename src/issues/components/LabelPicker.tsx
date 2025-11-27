import { useLabels } from "../../hooks/useLabels";
import { LoadingSpinner } from "./LoadingSpinner";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels()

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {
        labelsQuery.data?.map(l => (
          <span
            key={l.id}
            className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white"
            style={{ border: `1px solid #${l.color}` }}
          >
            {l.name}
          </span>
        ))
      }
    </div>
  );
};
