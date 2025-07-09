import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="lg:grid lg:h-screen lg:grid-cols-[16rem_auto]">
      <NavBar/>
      <section className="lg:overflow-y-auto">
        <Header/>
        {children}
      </section>
    </main>
  );
}

export default AppLayout;
