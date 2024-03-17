"use client";

import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";
import { api } from "../../../../convex/_generated/api";

const Dashboard = () => {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  // const getUser = useQuery(api.user.getUser, { email: user?.email || '' });
  const createUser = useMutation(api.user.createUser);
  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {
      email: user?.email || "",
    });
    if (!result.length) {
      createUser({
        name: user?.given_name || "",
        email: user?.email || "",
        image: user?.picture || "",
      }).then((res: any) => {
        console.log(res);
      });
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  );
};

export default Dashboard;
