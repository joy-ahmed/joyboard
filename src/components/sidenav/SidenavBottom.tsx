import { Archive, BookOpenCheck, FilePlus, Github } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const SidenavBottom = () => {
  const [currentProgress, setCurrentProgress] = useState(1);
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
    <div>
      <div className="flex flex-col">
        <div className="mb-4 flex flex-col gap-2">
          {menuList.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2  text-slate-700 hover:text-slate-800 cursor-pointer"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
              {
                item.id === 2 && <span className="text-xs bg-teal-600 text-white px-1 rounded">BETA</span>
              }
            </div>
          ))}
        </div>
        <Separator />
        <div className="mb-8">
          <Button
            variant="secondary"
            size="sm"
            className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white border border-transparent hover:border-teal-700 flex items-center gap-2"
          >
            <FilePlus size={20} />
            Add a new file
          </Button>
        </div>
        {/* progress bar */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center bg-slate-300 w-full rounded-full">
            <div
              style={{ width: `${currentProgress * 20}%` }}
              className={`h-3 bg-teal-600 rounded-full ${currentProgress === 5 ? "bg-red-500": "bg-teal-500"}`}
            ></div>
          </div>
          <span className="text-sm"><span className="font-black">{currentProgress}</span> out of <span className="font-black">5</span> file used</span>
          <span className="text-xs">
            <a href="#" className="underline">
              upgrade
            </a>{" "}
            your plan for unlimited access
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidenavBottom;
