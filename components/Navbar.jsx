import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 rounded-2xl bg-slate-800">
      <Link className="font-bold text-white" href={"/"}>
        Ujian PWEB
      </Link>
      <Link className="p-2 text-white bg-blue-500 rounded-2xl" href={"/addTopic"}>
        Tambah Topik
      </Link>
    </nav>
  );
}
