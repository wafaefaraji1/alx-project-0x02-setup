import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow bg-gray-50">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;