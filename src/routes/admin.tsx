import { createFileRoute } from "@tanstack/react-router";
import { AdminApp } from "@/features/admin-app";

export const Route = createFileRoute("/admin")({ component: AdminApp });
