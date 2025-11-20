import checkLicense from "../../license-check";
import GamingNewsWebsite from "./Main/page";

export default function HomePage() {
  const result = checkLicense();

  if (!result.valid) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-screen text-red-500 text-xl">
        {result.message}
        <p className="text-sm text-gray-400">Access Denied</p>
      </div>
    );
  }

  return <GamingNewsWebsite />;
}
