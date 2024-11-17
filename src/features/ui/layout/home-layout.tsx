import { Navbar, Footer } from "../base";

type HomeLayoutProps = {
  children: React.ReactElement;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-full min-h-screen relative font-merriweather">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
