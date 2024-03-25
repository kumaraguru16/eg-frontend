import TableBody from "./TableBody";
import TableHead from "./TableHead";

function HistoryTable() {
  return (
    <main className="flex-grow overflow-auto p-10 pt-14 ">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHead />
          <TableBody />
        </table>
      </div>
    </main>
  );
}

export default HistoryTable;
