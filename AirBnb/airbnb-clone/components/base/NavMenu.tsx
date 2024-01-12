import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import SignUpModal from "../auth/SignUpModal";
import LoginModal from "../auth/LoginModal";

export default function NavMenu() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <MenuIcon />
        </PopoverTrigger>
        <PopoverContent className="mr-6">
          <ul>
            <SignUpModal />
            <LoginModal/>
            
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
