"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div className="page-transition-root">
      <div key={pathname} className="page-content-enter">
        {children}
      </div>
      <div key={`${pathname}-veil`} className="page-transition-veil" aria-hidden="true" />
    </div>
  );
}
