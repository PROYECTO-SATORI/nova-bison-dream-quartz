import { createFileRoute } from "@tanstack/react-router";
import { StudentApp } from "@/features/student-app";

export const Route = createFileRoute("/student/")({ component: StudentApp });
