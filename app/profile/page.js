import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
    const {getUser,isAuthenticated} = getKindeServerSession();
    const user = await getUser()
    const authenticated = await isAuthenticated()

    if(!authenticated){
      redirect("https://nayem.kinde.com/auth/cx/_:nav&m:login&psid:0194945e347b0b9615b499c8a9778958");
    }

  return (
    <div>
       <div className="max-w-[80%] mx-auto p-4 space-y-3 mb-6">
      <h3 className="text-3xl md:text-5xl font-bold text-center">Welcome Dear {user?.given_name} {user?.family_name}</h3>

      </div>
      <div className="min-h-screen mt-12">
      <p className="text-2xl font-semibold text-center">Profile Information</p>
      <div className="w-full max-w-md p-6 mx-auto  shadow-md rounded-lg border-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold mt-4">
            {user.given_name} {user.family_name}
          </h1>
          <p className="text-white"> <span className="font-semibold text-white">Email :</span> {user.email}</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-semibold text-white">User ID :</span>
            {user.id}
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
