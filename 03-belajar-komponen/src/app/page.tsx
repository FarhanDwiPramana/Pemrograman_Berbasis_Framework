import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Todolist from "@/components/todolist";
import Bio from "@/components/bio";
import Avatar from "@/components/avatar";

export default function Home() {
  return (
    // <main className="flex flex-col items-center">
    //   <p className="justify-center mt-16">Ilmuwan yang luar biasa</p>

    //   <div className="flex mt-32">
    //     <Profile />
    //     <div className="mx-96">
    //       <Profile />
    //     </div>
    //     <Profile />
    //   </div>

    //   <Todolist />

    //   <Bio />
    //   <Gallery />

    //   <Avatar />
    // </main>

    // <section>
    //   <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">
    //     Ilmuwan yang luar biasa
    //   </h1>
    //   <hr />
    //   <Gallery />
    //   <hr />
    //   <Todolist />
    // </section>
    <Avatar />
  );
}
