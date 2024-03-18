import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "../ui/button";

interface Team {
  _id: string;
  name: string;
  createdBy: string;
}

const SidenavTop = ({ user }: any) => {
  const [teamList, setTeamList] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  const convex = useConvex();

  useEffect(() => {
    user && getTeamList();
  }, [user]);

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email || "",
    });
    console.log(result);
    setTeamList(result);
    setSelectedTeam(result[0]);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="group flex items-center gap-2 rounded p-2 hover:bg-slate-200 cursor-pointer transition">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
            <span className="flex items-center gap-2 font-bold">
              {selectedTeam?.name}
              <ChevronDown className="group-hover:rotate-180 transition duration-500" />
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7">
          <div className="mb-2.5">
            {teamList.map((team) => (
              <div
                key={team._id}
                className={`flex items-center gap-2 p-2 hover:bg-slate-200 rounded cursor-pointer ${
                  selectedTeam?._id === team._id &&
                  "bg-teal-500 text-white hover:bg-teal-600"
                }`}
                onClick={() => setSelectedTeam(team)}
              >
                <span className="font-bold">{team.name}</span>
              </div>
            ))}
          </div>
          <Separator className="mb-2.5" />
          <div>
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li key={item.id} className="hover:bg-slate-200 p-2 rounded">
                  <a href={item.path} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                </li>
              ))}
              <LogoutLink>
                <li className="hover:bg-slate-200 p-2 rounded">
                  <span className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </span>
                </li>
              </LogoutLink>
            </ul>
          </div>
          <Separator className="mt-2.5" />
          <div className="mt-2.5">
            <div className="flex items-center gap-4">
              <Image
                src={user?.picture}
                alt="logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <span className="flex items-center gap-2 font-bold text-sm">
                  {user?.given_name + " " + user?.family_name}
                </span>
                <p className="text-xs">{user?.email}</p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {/* file section  */}
      <div>
        <Button variant='outline' className="w-full justify-start gap-2 mt-8">
            <LayoutGrid className="w-5 h-5" />
            All files
            </Button>
      </div>
    </div>
  );
};

export default SidenavTop;
