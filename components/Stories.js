import { useSession } from 'next-auth/react';
import data from './data';
import Story from './Story';

const Stories = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story avatar={session.user.image} name={session.user.username} />
      )}
      {data?.map((profile) => (
        <Story key={profile.id} name={profile.name} avatar={profile.avatar} />
      ))}
    </div>
  );
};
export default Stories;
