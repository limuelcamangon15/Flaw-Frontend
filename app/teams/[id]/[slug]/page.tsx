import TeamWorkspace from "@/app/components/team/TeamWorkspace";
import AppNavbar from "@/app/components/ui/app-navbar/AppNavbar";
import PageLayout from "@/app/components/ui/layout/PageLayout";

export default function Team() {
  return (
    <PageLayout>
      <AppNavbar />
      <TeamWorkspace />
    </PageLayout>
  );
}
