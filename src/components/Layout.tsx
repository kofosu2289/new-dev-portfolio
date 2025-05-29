import { PropsWithChildren } from "react";
import { layout, main } from './Layout.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={layout}>
      <main className={main} role="main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}