"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import QRCode from "react-qr-code";

export default function Home() {
  const [qr, setQr] = useState(
    "https://sih.gov.in/sih2023PS?technology_bucket=QWxs&category=U29mdHdhcmU=&organization=QWxs&organization_type=QWxs"
  );
  const [qrTitle, setQrTitle] = useState(
    "Smart India Hackathon - Real-Time Vehicle Tracking system."
  );

  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const GenerateQr = () => {
    if (title == "") {
      toast.error("Enter a valid title");
      return;
    } else if (link == "") {
      toast.error("Enter a valid link");
      return;
    }
    setQrTitle(title);
    setQr(link);
    toast.success("QR Code Generated Successfully");
  };

  useEffect(() => {
    console.log(qr);
  }, [qr]);
  return (
    <div className="h-[100vh] w-full bg-blue-950 text-white flex items-center justify-evenly flex-col  ">
      <div className="flex flex-col gap-y-3  justify-center items-center">
        <span className="font-bold text-3xl text-orange-500">
          {" "}
          Bus Ticket Generation
        </span>
        <div className="mb-3 text-2xl font-bold text-white flex-col flex justify-center items-center gap-y-3">
          {" "}
          <span>Title :</span>
          <span className="font-medium ml-3  text-green-500">{qrTitle}</span>
        </div>
      </div>
      {qr.length > 0 ? (
        <div className=" font-bold text-xl gap-y-3 ">
          <QRCode value={qr} />
        </div>
      ) : null}
      <div className="flex gap-4 flex-col ">
        <Input
          placeholder="Enter Title"
          type="text"
          className="bg-transparent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          placeholder="Enter Link"
          type="text"
          className="bg-transparent"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          onKeyDown={(e) => (e.key === "Enter" ? GenerateQr() : null)}
        />

        <Button
          className="flex w-[20rem]"
          onClick={() => {
            GenerateQr();
          }}
        >
          Generate QR
        </Button>
      </div>
    </div>
  );
}
