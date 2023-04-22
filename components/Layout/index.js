import NavigationBar from "../NavigationBar";
export default function Layout({ children }) {
  return (
    <section className="w-screen h-screen">
      <NavigationBar />
      <main className="py-20 h-full">{children}</main>
    </section>
  );
}
