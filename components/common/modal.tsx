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
          <DialogTitle>{"Time's up!"}</DialogTitle>
          <DialogDescription>
            {"You have completed the typing practice."}
          </DialogDescription>
        </DialogHeader>
        <div>
          <Label>WPM:</Label>
          <Input type="number" value={0} readOnly />

          <Label>Accuracy:</Label>
          <Input type="number" value={0} readOnly />

          <Label>Time taken:</Label>
          <Input type="number" value={0} readOnly />

          <Label>Test type:</Label>
          <Input type="text" value={"Typing Practice"} readOnly />

          <Label>Consistency:</Label>
          <Input type="number" value={0} readOnly />

          <Label>Raw speed:</Label>
          <Input type="number" value={0} readOnly />
        </div>

        <DialogFooter>
          <Button onClick={() => (modal.isOpen ? closeModal() : null)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
