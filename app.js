const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function scrollBehavior() {
  return reducedMotion.matches ? "auto" : "smooth";
}

function revealActiveTab() {
  const nav = document.querySelector(".docnav");
  if (!nav) return;

  const active = nav.querySelector('[aria-current="page"]');
  if (!active) return;

  const centered = active.offsetLeft - (nav.clientWidth - active.clientWidth) / 2;
  nav.scrollTo({ left: Math.max(0, centered), behavior: scrollBehavior() });
}

function isInternalLink(link) {
  return (
    link &&
    link.origin === location.origin &&
    !link.hasAttribute("target") &&
    !link.hasAttribute("download")
  );
}

async function render(url, push) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(String(response.status));

  const next = new DOMParser().parseFromString(await response.text(), "text/html");
  const nextHeader = next.querySelector("header.topbar");
  const nextMain = next.querySelector("main");
  const nextFooter = next.querySelector("footer");

  if (!nextHeader || !nextMain || !nextFooter) throw new Error("estrutura");

  document.title = next.title;
  document.documentElement.lang = next.documentElement.lang;

  const nextDescription = next.querySelector('meta[name="description"]');
  const description = document.querySelector('meta[name="description"]');
  if (nextDescription && description) {
    description.setAttribute("content", nextDescription.getAttribute("content"));
  }

  document.querySelector("header.topbar").replaceWith(nextHeader);
  document.querySelector("main").replaceWith(nextMain);
  document.querySelector("footer").replaceWith(nextFooter);

  if (push) history.pushState({}, "", url);

  const hash = new URL(url, location.origin).hash;
  const anchor = /^#[\w-]+$/.test(hash) ? document.querySelector(hash) : null;

  if (anchor) anchor.scrollIntoView({ block: "start", behavior: "auto" });
  else window.scrollTo({ top: 0, behavior: "auto" });

  revealActiveTab();

  const heading = document.querySelector("main h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
}

async function navigate(url, push) {
  document.body.setAttribute("data-loading", "true");
  try {
    await render(url, push);
  } catch {
    location.href = url;
  } finally {
    document.body.removeAttribute("data-loading");
  }
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest("a");
  if (!isInternalLink(link)) return;
  if (link.hash && link.pathname === location.pathname) return;

  event.preventDefault();

  if (link.href === location.href) {
    revealActiveTab();
    return;
  }

  navigate(link.href, true);
});

window.addEventListener("popstate", () => navigate(location.href, false));

revealActiveTab();
