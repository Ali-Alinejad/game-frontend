import checkLicense from "../../license-check";
import GamingNewsWebsite from "./Main/page";

export default function HomePage() {
  checkLicense();

  return <GamingNewsWebsite />;
}
