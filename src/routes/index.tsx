import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <header>Peerlist UI Animation Challenge</header>
      <main></main>
    </>
  );
}
