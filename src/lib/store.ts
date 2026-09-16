import { create } from "zustand";
import {
  OWNER_CHATS,
  OWNER_REQUESTS,
  PROPERTIES,
  STUDENT_CHATS,
  type Conversation,
  type OwnerRequest,
  type Property,
} from "@/lib/data";

export type Role = "student" | "owner" | "admin";
export type StudentTab = "search" | "favorites" | "messages" | "profile";
export type OwnerTab =
  | "overview"
  | "properties"
  | "publish"
  | "requests"
  | "messages"
  | "profile"
  | "identity";
export type AdminTab = "overview" | "users" | "owners" | "listings" | "reports" | "reviews";

type HabitaState = {
  properties: Property[];
  favorites: string[];
  studentChats: Conversation[];
  ownerChats: Conversation[];
  requests: OwnerRequest[];
  handledRequests: Record<string, string>;
  studentTab: StudentTab;
  ownerTab: OwnerTab;
  adminTab: AdminTab;
  activeStudentChat: string;
  activeOwnerChat: string;
  editingPropertyId: string | null;
  toggleFavorite: (id: string) => void;
  setStudentTab: (tab: StudentTab) => void;
  setOwnerTab: (tab: OwnerTab) => void;
  setAdminTab: (tab: AdminTab) => void;
  sendStudentMessage: (text: string) => void;
  sendOwnerMessage: (text: string) => void;
  setActiveStudentChat: (id: string) => void;
  setActiveOwnerChat: (id: string) => void;
  handleRequest: (id: string, message: string) => void;
  updatePropertyStatus: (id: string, status: Property["status"]) => void;
  removeOwnerProperty: (id: string) => void;
  addProperty: (property: Property) => void;
  updateProperty: (id: string, patch: Partial<Property>) => void;
  addReview: (id: string, review: { author: string; stars: number; text: string }) => void;
  setEditingProperty: (id: string | null) => void;
};

export const useHabita = create<HabitaState>((set, get) => ({
  properties: PROPERTIES,
  favorites: ["p1", "p3", "p5"],
  studentChats: STUDENT_CHATS,
  ownerChats: OWNER_CHATS,
  requests: OWNER_REQUESTS,
  handledRequests: {},
  studentTab: "search",
  ownerTab: "overview",
  adminTab: "overview",
  activeStudentChat: "c1",
  activeOwnerChat: "Valentina Gómez",
  editingPropertyId: null,
  toggleFavorite: (id) =>
    set((s) => ({
      favorites: s.favorites.includes(id)
        ? s.favorites.filter((x) => x !== id)
        : [...s.favorites, id],
    })),
  setStudentTab: (tab) => set({ studentTab: tab }),
  setOwnerTab: (tab) => set({ ownerTab: tab, editingPropertyId: tab === "publish" ? get().editingPropertyId : null }),
  setAdminTab: (tab) => set({ adminTab: tab }),
  setActiveStudentChat: (id) => set({ activeStudentChat: id }),
  setActiveOwnerChat: (id) => set({ activeOwnerChat: id }),
  sendStudentMessage: (text) =>
    set((s) => ({
      studentChats: s.studentChats.map((c) =>
        c.id === s.activeStudentChat
          ? { ...c, messages: [...c.messages, { from: "me", text, time: "Ahora" }] }
          : c,
      ),
    })),
  sendOwnerMessage: (text) =>
    set((s) => ({
      ownerChats: s.ownerChats.map((c) =>
        c.id === s.activeOwnerChat
          ? { ...c, messages: [...c.messages, { from: "me", text, time: "Ahora" }] }
          : c,
      ),
    })),
  handleRequest: (id, message) =>
    set((s) => ({ handledRequests: { ...s.handledRequests, [id]: message } })),
  updatePropertyStatus: (id, status) =>
    set((s) => ({
      properties: s.properties.map((p) => (p.id === id ? { ...p, status } : p)),
    })),
  removeOwnerProperty: (id) =>
    set((s) => ({ properties: s.properties.filter((p) => p.id !== id) })),
  addProperty: (property) => set((s) => ({ properties: [property, ...s.properties] })),
  updateProperty: (id, patch) =>
    set((s) => ({
      properties: s.properties.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    })),
  addReview: (id, review) =>
    set((s) => ({
      properties: s.properties.map((p) =>
        p.id === id
          ? {
              ...p,
              reviews: [review, ...p.reviews],
              reviewsCount: p.reviewsCount + 1,
            }
          : p,
      ),
    })),
  setEditingProperty: (id) => set({ editingPropertyId: id, ownerTab: id ? "publish" : get().ownerTab }),
}));
