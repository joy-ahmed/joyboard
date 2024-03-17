'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const {user} = useKindeBrowserClient()
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
