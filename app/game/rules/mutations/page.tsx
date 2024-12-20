import { mutations } from "@/lib/random-mutations";

export default function MutationsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center  bg-black text-white">
    <section className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl print:max-w-none print:p-4">
      
      <table className="table-auto">
        <thead>
          <tr className="bg-neutral-800">
            <th className="p-2">D100</th>
            <th className="p-2">Physical Mutation Description</th>
          </tr>
        </thead>
        <tbody>
          {mutations.map((mutation) => (
            <tr key={mutation.id} className="odd:bg-neutral-900 even:bg-neutral-800">
              <td className="p-2">{mutation.id}</td>
              <td className="p-2">{mutation.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </div>
  );
}