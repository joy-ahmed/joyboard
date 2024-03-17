"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";

import React, { useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      name: teamName,
      createdBy: user?.email || "",
    }).then((res) => {
      console.log(res);
      if (res) {
        router.push("/dashboard");
        toast("Team created successfully🎊");
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 min-h-screen py-32">
      <div className="brand">
        <a className="block text-teal-500" href="#">
          <span className="sr-only">Home</span>
          <svg
            className="w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </a>
      </div>
      {/* content  */}
      <div>
        <div className="mb-5">
          <h2 className="text-4xl font-bold text-center mb-3">
            What is your team name?
          </h2>
          <p className="text-center text-sm">
            You can always change this name later from the settings.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <label htmlFor="teamName">Team Name</label>
          <Input
            onChange={(e) => setTeamName(e.target.value)}
            id="teamName"
            placeholder="Team name"
          />
          <Button
            onClick={() => createNewTeam()}
            disabled={!(teamName && teamName.length > 0)}
            className="bg-teal-500 hover:bg-teal-700"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
