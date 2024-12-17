import { Footer, Navbar } from "@/components/layout";
import { Modal } from "@/components/common";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Modal />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
