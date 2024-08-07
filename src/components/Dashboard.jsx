import UserContainer from './users/UserContainer';
import PostContainer from './posts/PostContainer';

const UserProfile = () => {

  return (
    <div className="p-10">
      <UserContainer/>
      <PostContainer/>
    </div>
  );
};

export default UserProfile;
