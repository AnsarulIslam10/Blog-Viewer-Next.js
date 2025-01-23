import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-xl">Blog Viewer</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          <li>
            <Link className="btn btn-info" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-info" href={"/profile"}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;