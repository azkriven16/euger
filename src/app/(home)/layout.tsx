import HomeLayout from "@/modules/home/home.layout";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HomeLayout>{children}</HomeLayout>;
}
