import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { divisions } from "@/lib/site";

const division = divisions[3];
export const metadata: Metadata = { title: "Ambiental", description: division.summary };
export default function Page() { return <DivisionPage {...division} />; }
