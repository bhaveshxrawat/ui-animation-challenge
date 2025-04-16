import DynamicStatusIndicator from "@/components/DynamicStatusIndicator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/challenges/dynamic-status-indicator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DynamicStatusIndicator />;
}
