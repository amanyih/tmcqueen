import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "../ui/input";
import { Button } from "../ui";

export const LiveChat = () => {
  return (
    <aside className="col-span-2">
      <h2 className="text-2xl font-bold text-primary mb-4">Live Chat</h2>
      <div className="bg-card rounded-lg shadow p-4 flex flex-col gap-2 h-[400px]">
        <ScrollArea className="flex-1 border p-2 rounded-md">
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-semibold">Shad Mirza:</span> Ready to race!
            </p>
            <p className="text-sm">
              <span className="font-semibold">John Doe:</span> Let’s go 🚀
            </p>
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input placeholder="Type a message..." />
          <Button>Send</Button>
        </div>
      </div>
    </aside>
  );
};
