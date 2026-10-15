import Container from "@/Components/common/Container/Container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}
