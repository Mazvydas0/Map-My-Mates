export default function DataCard({ data }: any) {
  return (
    <div className="container mx-auto p-4">
      <div className="rounded-lg bg-slate-50 shadow-lg p-6 md:flex">
        <div className="md:ml-10">{data}</div>
      </div>
    </div>
  );
}
