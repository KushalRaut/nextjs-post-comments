import Link from "next/link";
import LoginButton from "./LoginButton";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import LoggedIn from "./LoggedIn";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <nav className="flex justify-between items-center py-8">
        <Link href="/">
          <h2 className="text-blue-600">Home</h2>
        </Link>
        <ul className="flex items-center gap-6">
          {!session?.user && <LoginButton />}
          {session?.user && <LoggedIn image={session.user.image || ""} />}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
