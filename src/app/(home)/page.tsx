import Home from "@/modules/home/home.page";

export default async function Page() {
    return <Home />;
}

// import { redirect } from "next/navigation";
// import { getSession } from "@/modules/auth/utils/auth-utils";

// export default async function HomePage() {
//     const session = await getSession();
//     redirect(session ? "/dashboard" : "/login");
// }
