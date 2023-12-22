import Image from "next/image";

export default function EventDetailsCard({ data }: any) {
  return (
    <div className="container mx-auto p-4">
      <div
        className="rounded-lg bg-slate-50 shadow-lg p-6
         flex flex-col md:flex-row justify-between"
      >
        <div className="md:ml-10">
          <Image alt="event image" width={80} height={80} src={data?.eventImage} />
        </div>
        <div>
          <p className="text-[#0a3d62] font-bold text-base">{data.name}</p>
          <p>Location: {data.city}</p>
          {data.details}
        </div>
      </div>
    </div>
  );
}
