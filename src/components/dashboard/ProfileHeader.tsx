import { BusinessProfile } from '@/types/business';
import { FiMapPin, FiCalendar, FiUsers, FiBriefcase } from 'react-icons/fi';

interface ProfileHeaderProps {
  profile: BusinessProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const getStatusColor = () => {
    switch (profile.status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            {profile.name}
          </h1>
          <p className="text-zinc-600">{profile.description}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusColor()}`}
        >
          {profile.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FiBriefcase className="text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Industry</p>
            <p className="text-sm font-semibold text-zinc-900">
              {profile.industry}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <FiMapPin className="text-orange-600" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Location</p>
            <p className="text-sm font-semibold text-zinc-900">
              {profile.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FiCalendar className="text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Established</p>
            <p className="text-sm font-semibold text-zinc-900">
              {profile.establishedYear}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <FiUsers className="text-orange-600" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Employees</p>
            <p className="text-sm font-semibold text-zinc-900">
              {profile.employeeCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

