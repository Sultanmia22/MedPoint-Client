import Container from "@/Components/common/Container/Container";
import Footer from "@/Components/layouts/MainLaout/Footer/Footer";
import Navbar from "@/Components/layouts/MainLaout/Navbar/ParentNavbar/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}