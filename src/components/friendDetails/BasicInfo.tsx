
export default function BasicInfo({firstName,lastName,age,nationality,profilePic}:any) {
  return (
      <div className="container w-full flex-1 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-10">
          <div className="flex-shrink-0 md:ml-10">
            <img className="w-24 h-24 rounded-full object-cover" src={profilePic} alt="Profile Picture" />
          </div>
          <div className="mt-4 md:mt-0 ml-6 flex-wrap">
            <h1 className="text-2xl font-bold text-[#0a3d62]">{firstName} {lastName}</h1>
            <p className="text-gray-700">Age: {age}</p>
            <p className="text-gray-700">Location: {nationality}</p>
          </div>
        </div>
      </div>
  )
}