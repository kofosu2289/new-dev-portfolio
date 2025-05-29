import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <main role="main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}