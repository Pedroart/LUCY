import ECommerce from "@/components/Dashboard/E-commerce";
import CardComponentes from "@/components/CardComponente/CardComponentes";
import { Metadata } from "next";
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Monitoreo",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (

    <div>
      <div className="mb-7.5 flex flex-wrap justify-end gap-3 rounded-lg border border-stroke px-4 py-1 dark:border-strokedark">
        <a href="#"  className="rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 bg-primary text-white">
          Todos
        </a>
        <a href="#"  className="rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 bg-gray text-black dark:text-white">
          Alarmas
        </a>
        <a href="#"  className="rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 bg-gray text-black dark:text-white">
          Desconectados
        </a>      
      </div>
      <CardComponentes/>
    </div>
  );
}
