import { create } from "zustand";

export interface LeadModalContext {
  source: string;
  programSlug?: string;
  programTitle?: string;
  heading?: string;
  subheading?: string;
}

interface LeadModalState {
  isOpen: boolean;
  context: LeadModalContext | null;
  open: (context?: LeadModalContext) => void;
  close: () => void;
}

export const useLeadModalStore = create<LeadModalState>((set) => ({
  isOpen: false,
  context: null,
  open: (context) =>
    set({
      isOpen: true,
      context: context ?? { source: "general" },
    }),
  close: () => set({ isOpen: false }),
}));
