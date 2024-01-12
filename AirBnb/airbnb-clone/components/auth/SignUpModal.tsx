"use client"
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Seymour_One } from "next/font/google";

export default function SignUpModal() {
    const [open , setOpen] = useState<boolean>(false)
  return (
    <AlertDialog open = {open}>
      <AlertDialogTrigger asChild>
        <li className="hover:bg-gray-200 rounded-md p-2 cursor-pointer" onClick={() => setOpen(true)}>
          Sign Up {" "}
        </li> 
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
                <span>Sign Up   </span>
                <X onClick={() => setOpen(false)} className="cursor-pointer"/>

            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
           <form>
            <h1 className="text-lg font-bold"> Welcome to AirBnb </h1>

            <div className="mt-5">
                <Label htmlFor="name">Name </Label>
                <Input placeholder="Enter Your Name " id = "name"/>
                <span className="text-red-400"></span>
            </div>


            <div className="mt-5">
                <Label htmlFor="email">Email </Label>
                <Input placeholder="Enter Your Email " id = "email"/>
                <span className="text-red-400"></span>
            </div>


            <div className="mt-5">
                <Label htmlFor="cpassword">Password  </Label>
                <Input placeholder="Enter Your Password  " id = "password"/>
                <span className="text-red-400"></span>
            </div>


            <div className="mt-5">
                <Label htmlFor="cpassword"> Confirm Password  </Label>
                <Input placeholder="Confirm  Your Password  " id = "password"/>
                <span className="text-red-400"></span>
            </div>

            <div className="mt-5">
                <Button className="bg-brand w-full">
                Continue 
                </Button>

                <h1 className="text-center my-2 font-bold text-xl">-- OR --</h1>

                <Button variant= "outline" className="w-full">
                    <Image src = "/images/google.png"
                    width = {25}
                    height={25}
                    alt = "google _logo "
                    className="mr-5"/>
                    Continue with Google </Button>

                    <Button variant= "outline" className="w-full mt-5 ">
                    <Image src = "/images/github.png"
                    width = {25}
                    height={25}
                    alt = "google _logo "
                    className="mr-5"/>
                    Continue with Github  </Button>

            </div>


           </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
   



      </AlertDialogContent>
    </AlertDialog>
  );
}
