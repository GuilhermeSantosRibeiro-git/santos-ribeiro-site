import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { divisions } from "@/lib/site";

const division = divisions[2];
export const metadata: Metadata = { title: "Construtora", description: division.summary };
export default function Page() { return <DivisionPage {...division} />; }
