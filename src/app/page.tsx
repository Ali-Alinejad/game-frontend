import {checkLicense} from "gameford-license-check"; 
import GamingNewsWebsite from "./Main/page";

export default async function HomePage() {
  const result = checkLicense(process.env.LICENSE_KEY);

  if (!result.valid) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-screen text-red-500 text-xl">
        <p>{result.message}</p>

        <p className="text-sm text-gray-400">Access Denied</p>
      </div>
    );
  }

  return <GamingNewsWebsite />;
}
