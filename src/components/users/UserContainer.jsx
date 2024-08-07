import React, { useEffect, useState } from 'react';
import UsersList from './UsersList';

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const result = await userResponse.json();
        setUsers(result);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching user data: ', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return <UsersList users={users} />;
};

export default UserContainer;
