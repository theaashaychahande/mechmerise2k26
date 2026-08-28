import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPETITIONS, getEventBySlug } from "@/lib/competitions";
import EventDetailPage from "@/components/EventDetailPage";

/**
 * /events/[slug] — Step 5 deliverable.
 *
 * Dynamic per-event detail template. Every card on the /competitions grid
 * links here via its slug. Renders the full two-column detail layout.
 */
export function generateStaticParams() {
  return COMPETITIONS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: "Event Not Found · MECHMERISE 2K26" };
  return {
    title: `${event.name} · MECHMERISE 2K26`,
    description: event.oneLiner,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();
  return <EventDetailPage event={event} />;
}
