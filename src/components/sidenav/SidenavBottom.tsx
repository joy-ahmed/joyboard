import { Archive, BookOpenCheck, FilePlus, Github } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

const SidenavBottom = ({ onFileName, totalFiles }: any) => {
  const [fileName, setFileName] = useState("");
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: BookOpenCheck,
      path: "",
    },
    {
      id: 2,
      name: "Github Sync",
      icon: Github,
      path: "",
    },
    {
      id: 3,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex flex-col gap-2">
        {menuList.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-2  text-slate-700 hover:text-slate-800 cursor-pointer"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
            {item.id === 2 && (
              <span className="text-xs bg-teal-600 text-white px-1 rounded">
                BETA
              </span>
            )}
          </div>
        ))}
      </div>
      <Separator />
      <div className="mb-8">
        <Dialog>
          <DialogTrigger className="w-full" asChild>
            <Button
              variant="secondary"
              size="sm"
              className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white border border-transparent hover:border-teal-700 flex items-center gap-2"
            >
              <FilePlus size={20} />
              Add a new file
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a team file</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="File name"
                  className="mt-4"
                  onChange={(e) => setFileName(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  disabled={!fileName || !fileName.length}
                  type="button"
                  variant="secondary"
                  className="bg-teal-600 hover:bg-teal-700 text-white w-9/12 mx-auto"
                  onClick={() => onFileName(fileName)}
                >
                  Create file
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {/* progress bar */}
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center bg-slate-300 w-full rounded-full">
          <div
            style={{ width: `${totalFiles * 20}%` }}
            className={`h-3 rounded-full ${
              totalFiles === 5 ? "bg-red-500" : "bg-teal-600"
            }`}
          ></div>
        </div>
        <span className="text-sm">
          <span className="font-black">{totalFiles}</span> out of{" "}
          <span className="font-black">5</span> file used
        </span>
        <span className="text-xs">
          <a href="#" className="underline">
            upgrade
          </a>{" "}
          your plan for unlimited access
        </span>
      </div>
    </div>
  );
};

export default SidenavBottom;
