"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_ORDER = ["/", "/about", "/skills", "/portfolio", "/contact"] as const;
const WHEEL_THRESHOLD = 70;
const NAV_COOLDOWN_MS = 900;
const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

function hasScrollableAncestor(target: HTMLElement, deltaY: number) {
  let node: HTMLElement | null = target;

  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const canScrollY =
      (style.overflowY === "auto" || style.overflowY === "scroll" || style.overflowY === "overlay") &&
      node.scrollHeight > node.clientHeight;

    if (canScrollY) {
      const atTop = node.scrollTop <= 0;
      const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;

      if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) {
        return true;
      }
    }

    node = node.parentElement;
  }

  return false;
}

export function WheelRouteNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const wheelDeltaRef = useRef(0);
  const lockUntilRef = useRef(0);

  useEffect(() => {
    wheelDeltaRef.current = 0;
  }, [pathname]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (!window.matchMedia(DESKTOP_MEDIA_QUERY).matches) return;
      if (event.ctrlKey) return;
      if (document.querySelector('[aria-modal="true"]')) return;

      const currentIndex = ROUTE_ORDER.indexOf(pathname as (typeof ROUTE_ORDER)[number]);
      if (currentIndex === -1) return;

      const target = event.target instanceof HTMLElement ? event.target : null;
      if (!target) return;

      if (target.closest("input, textarea, select, [contenteditable='true'], [data-wheel-nav-ignore='true']")) {
        return;
      }

      if (hasScrollableAncestor(target, event.deltaY)) {
        return;
      }

      const now = Date.now();
      if (now < lockUntilRef.current) {
        event.preventDefault();
        return;
      }

      wheelDeltaRef.current += event.deltaY;
      if (Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) {
        return;
      }

      const direction = wheelDeltaRef.current > 0 ? 1 : -1;
      wheelDeltaRef.current = 0;

      const nextIndex = Math.min(ROUTE_ORDER.length - 1, Math.max(0, currentIndex + direction));
      if (nextIndex === currentIndex) {
        return;
      }

      lockUntilRef.current = now + NAV_COOLDOWN_MS;
      event.preventDefault();
      router.push(ROUTE_ORDER[nextIndex]);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [pathname, router]);

  return null;
}
