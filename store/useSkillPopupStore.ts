import { create } from "zustand";

interface SkillPopupState {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

/**
 * Tracks visibility of the timed "Want to upgrade your skills?" bottom
 * popup so other floating UI (e.g. FloatingContactBar) can hide itself
 * while the popup is on screen.
 */
export const useSkillPopupStore = create<SkillPopupState>((set) => ({
  isOpen: false,
  setOpen: (open) => set({ isOpen: open }),
}));
