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
        <h3 className="text-3xl text-center my-8 font-semibold">Welcome to your profile</h3>
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-xl border-b-4 border-cyan-500 border-r-4 text-center p-10 shadow-md">
            <p className="inline-block h-12 w-12 text-white rounded-full border-4 text-4xl border-cyan-500 bg-cyan-400">
              {user.given_name.slice(0, 1)}
            </p>
            <h1 className="text-xl font-semibold">
              {user?.given_name} {user?.family_name}
            </h1>
            <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
