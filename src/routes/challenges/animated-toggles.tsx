import AnimatedToggles from "@/components/AnimatedToggles";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/challenges/animated-toggles")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AnimatedToggles />;
}
