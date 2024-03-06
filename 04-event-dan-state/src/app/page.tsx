"use client";
import Tombol_1, { Tombol_2 } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesanku" namaTombol1="Pesan" />
      </div>
    </>
  );
}
