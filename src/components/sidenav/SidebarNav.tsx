import React, { useEffect, useState } from "react";
import SidenavTop, { Team } from "./SidenavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidenavBottom from "./SidenavBottom";
import { useConvex, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";

const SidebarNav = () => {
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<Team>();
  const createFile = useMutation(api.files.createFile)
  const [fileList, setFileList] = useState<any[]>([]);
  const [totalFiles, setTotalFiles] = useState(0);

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam])
  const onFileName = (fileName:string) => {
    console.log(fileName);
    createFile({
      name: fileName,
      teamId: activeTeam?._id || "",
      createdBy: user?.email || "",
      archived: false,
      document: "",
      whiteboard: "",
    })
      .then((res) => {
        if(res){
          getFiles();
          toast("File created successfully")
        }
      })
      .catch((err) => {
        toast("Error while creating file")
      });
  }
  const { user } = useKindeBrowserClient();

  const getFiles = async() => {
    const result = await convex.query(api.files.getFiles,{ teamId: activeTeam?._id || "" });
    console.log(result)
    setFileList(result);
    setTotalFiles(result?.length);
  }

  return (
    <div className="h-screen fixed w-64 p-6 border-r flex flex-col">
      <div className="flex-1">
        <SidenavTop user={user} setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)} />
      </div>
      <div>
        <SidenavBottom totalFiles={totalFiles} onFileName={onFileName}/>
      </div>
    </div>
  );
};

export default SidebarNav;
