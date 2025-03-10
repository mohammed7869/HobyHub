import AuthNavbar from "./Navbar";



export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthNavbar />
      <main style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="sm:h-screen md:h-auto">
        {children}
      </main>
    </>
  );
}
