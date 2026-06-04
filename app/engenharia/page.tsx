import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { divisions } from "@/lib/site";

const division = divisions[0];
export const metadata: Metadata = { title: "Engenharia", description: division.summary };
export default function Page() { return <DivisionPage {...division} />; }
