import { useEffect } from "react";

const BASE_TITLE = "VSMART TECH SOLUTIONS LLC";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title === BASE_TITLE ? title : `${title} — ${BASE_TITLE}`;

    if (!description) return;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const previous = meta.getAttribute("content");
    meta.setAttribute("content", description);
    return () => {
      if (previous !== null) meta?.setAttribute("content", previous);
    };
  }, [title, description]);
}
