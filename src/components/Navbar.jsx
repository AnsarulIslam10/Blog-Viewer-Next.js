import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <a className="text-xl">Blog Viewer</a>
      </div>
      <div className="">
        <ul className="flex px-1 gap-2 items-center">
          <li>
            <Link
              className="px-2 py-1 border-2 rounded-md bg-cyan-400 hover:bg-cyan-500 transition-all duration-300"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="px-2 py-1 border-2 rounded-md bg-cyan-400 hover:bg-cyan-500 transition-all duration-300" href={"/profile"}>
              Profile
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <LogoutLink className="px-2 py-1 border-2 rounded-md bg-cyan-400 hover:bg-cyan-500 transition-all duration-300">Log Out</LogoutLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginLink className="px-2 py-1 border-2 rounded-md bg-cyan-400 hover:bg-cyan-500 transition-all duration-300">Log In</LoginLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
