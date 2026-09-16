import { createFileRoute } from "@tanstack/react-router";
import { PropertyDetail } from "@/features/property-detail";

export const Route = createFileRoute("/student/$id")({ component: DetailRoute });

function DetailRoute() {
  const { id } = Route.useParams();
  return <PropertyDetail id={id} />;
}
