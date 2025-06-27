// function ProfileCard({ profile }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg animate-slide-up">
//       <h3 className="text-xl font-bold text-primary mb-2">{profile.name}</h3>
//       <div className="space-y-2 text-gray-600 text-sm">
//         <p><span className="font-medium text-text">DOB:</span> {new Date(profile.dob).toLocaleDateString()}</p>
//         <p><span className="font-medium text-text">Email:</span> {profile.email}</p>
//         <p><span className="font-medium text-text">Phone:</span> {profile.phone}</p>
//         <p><span className="font-medium text-text">Qualification:</span> {profile.qualification}</p>
//         <p><span className="font-medium text-text">Branch:</span> {profile.branch}</p>
//         <p>
//           <span className="font-medium text-text">Status:</span>{' '}
//           <span
//             className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
//               profile.employmentStatus === 'Employed'
//                 ? 'bg-green-100 text-green-800'
//                 : 'bg-red-100 text-red-800'
//             }`}
//           >
//             {profile.employmentStatus}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;

// src/components/ProfileCard.js
function ProfileCard({ profile, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg animate-slide-up">
      <h3 className="text-xl font-bold text-primary mb-2">{profile.name}</h3>
      <div className="space-y-2 text-gray-600 text-sm">
        <p><span className="font-medium text-text">DOB:</span> {new Date(profile.dob).toLocaleDateString()}</p>
        <p><span className="font-medium text-text">Email:</span> {profile.email}</p>
        <p><span className="font-medium text-text">Phone:</span> {profile.phone}</p>
        <p><span className="font-medium text-text">Qualification:</span> {profile.qualification}</p>
        <p><span className="font-medium text-text">Branch:</span> {profile.branch}</p>
        <p>
          <span className="font-medium text-text">Status:</span>{' '}
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
              profile.employmentStatus === 'Employed'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {profile.employmentStatus}
          </span>
        </p>
      </div>
      <button
        onClick={() => onDelete(profile._id)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
      >
        Delete Profile
      </button>
    </div>
  );
}

export default ProfileCard;