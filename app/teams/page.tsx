import TeamPage from "../components/team/TeamPage";
import AppNavbar from "../components/ui/app-navbar/AppNavbar";
import PageLayout from "../components/ui/layout/PageLayout";

export default function Teams() {
  return (
    <PageLayout>
      <AppNavbar />
      <TeamPage />
    </PageLayout>
  );
}
