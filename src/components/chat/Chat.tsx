import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Textarea } from "../ui/textArea";
import { Send } from "lucide-react";

export function Chat({ name, img }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-evenly">
          <div className="-ml-5 mr-5">
            <Image
              className="rounded-full"
              width={20}
              height={20}
              alt="chaticon"
              src={img}
            />
          </div>
          <div className="mx-5">{name}</div>
          <div className="flex">
            <p className="text-green-600 -mt-6 text-5xl font-bold">.</p> online
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex space-x-5 items-center">
            <Image
              className=""
              width={40}
              height={40}
              alt="chaticon"
              src={img}
            />
            <SheetTitle>
              <div className="flex justify-evenly">
                <div>{name}</div>{" "}
                <div className="text-green-600 -mt-6 text-5xl font-bold">.</div>
              </div>
            </SheetTitle>
          </div>
        </SheetHeader>
        <div className="py-4 h-96 flex justify-center items-center">
          Here you'll implement chat component
        </div>
        <SheetFooter className="-ml-20">
          <Textarea placeholder="Type your message here." />
          <div className="flex bottom-0 items-center">
            <Send />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
