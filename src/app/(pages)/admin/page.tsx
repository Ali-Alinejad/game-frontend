
import AdminDashboard from "./Main/page";

export default function AdminPage({ searchParams }: any) {
  const token = searchParams?.key;

  if (!token || token !== process.env.ACCESS_ADMIN_PANEL) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-screen text-red-500 text-xl">
        <p>دسترسی غیر مجاز</p>
        <p className="text-sm text-gray-400">Access Denied</p>
      </div>
    );
  }

  return <AdminDashboard />;
}
