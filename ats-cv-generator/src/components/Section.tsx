interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-500">
        {title}
      </h2>
      {children}
    </div>
  );
}