import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/api/auth/login");
  }
  console.log(user);
  return (
    <div>
      <div>
        <h3 className="text-3xl text-center my-8">Welcome to your profile</h3>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl">
            {user?.given_name} {user?.family_name}
          </h1>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
