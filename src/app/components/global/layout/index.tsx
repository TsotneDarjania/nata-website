import Footer from "./footer";
import Header from "./header";

export default function PageLayout({
  children,
  clasName,
}: {
  children: React.ReactNode;
  clasName?: string;
}) {
  return (
    <div className={"min-h-screen relative " + clasName}>
      <Header />
      <main className="mt-20 relative">{children}</main>
      <Footer />
    </div>
  );
}
