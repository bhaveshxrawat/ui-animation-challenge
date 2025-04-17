import AnimatedCheckbox from "@/components/AnimatedCheckbox";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/challenges/animated-checkbox")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AnimatedCheckbox />;
}
