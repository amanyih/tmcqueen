"use client";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "../ui/dialog";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
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
          <DialogDescription>
            {"You have completed the typing practice."}
          </DialogDescription>
        </DialogHeader>
        <div>{modal.content}</div>
        <DialogFooter>
          <Button onClick={() => (modal.isOpen ? closeModal() : null)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
