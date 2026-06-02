import { site } from "@/data/portfolio";

export function ContactSection() {
  const rows = [
    { label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/-/g, "")}` },
    { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { label: "Website", value: site.contact.website, href: `https://${site.contact.website}` },
    { label: "Location", value: site.contact.location },
  ] as const;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Contact</h2>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="rounded-sm border border-zinc-100 bg-zinc-50/80 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">{row.label}</dt>
            <dd className="mt-2 font-semibold text-zinc-800">
              {"href" in row && row.href ? (
                <a href={row.href} className="transition hover:text-accent">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
