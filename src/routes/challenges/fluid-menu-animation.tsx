import FluidMenuAnimation from "@/components/FluidMenuAnimation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/challenges/fluid-menu-animation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FluidMenuAnimation />;
}
