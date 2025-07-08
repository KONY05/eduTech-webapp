import Header from "@/components/Header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <NavBar/> */}
      <section>
        <Header/>
        {children}
      </section>
    </main>
  );
}

export default AppLayout;
