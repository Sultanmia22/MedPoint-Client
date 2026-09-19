import Container from "@/Components/common/Container/Container";
import Navbar from "@/Components/layouts/MainLaout/Navbar/ParentNavbar/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}