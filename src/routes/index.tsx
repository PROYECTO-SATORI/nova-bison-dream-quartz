import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/features/login-page";

export const Route = createFileRoute("/")({ component: LoginPage });
