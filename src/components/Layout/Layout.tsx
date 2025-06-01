import { PropsWithChildren } from "react";
import { layout, main } from './Layout.css';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={layout}>
      <Header />
      <main className={main} role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}