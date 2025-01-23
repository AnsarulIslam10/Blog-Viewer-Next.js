import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
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
          {user?.picture ? (
            <Image src={user.picture} alt="pfp" height={80} width={80} className="rounded-full border-4 border-cyan-500 " />
          ) : (
            <p className="inline-block px-4 py-2 rounded-full border-4 text-4xl border-cyan-500">
              {user.given_name.slice(0, 1)}
            </p>
          )}
          <h1 className="text-xl">{user?.given_name} {user?.family_name}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
