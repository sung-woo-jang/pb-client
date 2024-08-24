type Keywords = {
  id: number;
  keyword: string;
};

interface IKeywordBoxProps {
  keywords: Keywords[];
}

export default function KeywordBox({ keywords }: IKeywordBoxProps) {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {keywords.map(({ keyword, id }) => (
        <div
          key={id}
          className="flex items-center px-2 py-1 text-xs rounded-full border border-gray-300"
        >
          <span className="ml-1">{keyword}</span>
        </div>
      ))}
    </div>
  );
}
