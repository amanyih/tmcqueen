"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useUIStore } from "@/store";

export function Modal() {
  const { modal, openModal, closeModal } = useUIStore();

  return (
    <Dialog
      open={modal.isOpen}
      onOpenChange={() => (modal.isOpen ? closeModal() : null)}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{modal.title}</DialogTitle>
          <DialogDescription>{}</DialogDescription>
        </DialogHeader>
        <div>{modal.content}</div>
        <DialogFooter>
          <div
            className="bg-secondary py-2 px-4 rounded-md text-white hover:bg-secondary/90 cursor-pointer"
            onClick={() => (modal.isOpen ? closeModal() : null)}
          >
            Close
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
