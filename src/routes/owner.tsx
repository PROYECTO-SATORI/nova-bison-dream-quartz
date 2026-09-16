import { createFileRoute } from "@tanstack/react-router";
import { OwnerApp } from "@/features/owner-app";

export const Route = createFileRoute("/owner")({ component: OwnerApp });
