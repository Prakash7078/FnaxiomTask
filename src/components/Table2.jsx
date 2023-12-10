import { Card, Typography } from "@material-tailwind/react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "managerpost",
  },
  
 
];
 
function Table2() {
  return (
    <Card className="h-fit  mx-auto overflow-scroll bg-gray-800 text-gray-400 rounded-md">
      <table className="w-full  min-w-max table-auto text-left ">
        <thead>
          <tr className="text-center">
            <td className="flex justify-between p-4 items-center font-bold">GDEXAM <FaGreaterThan /></td>
            <td >
              <div className="flex justify-between items-center mx-2">
                <h1 className="font-bold">Hello</h1>
                <FaLessThan />
              </div>
            </td>
            <td >Payment</td>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => {
            const classes = "px-8 py-4 border-x border-gray-900";
 
            return (
              <><tr key={name} className="">
                <td className={classes}>
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-gray-500">{name}</p>
                </td>
                <td className={classes}>
                  <h1 className="font-bold">{job}</h1>
                  <p className="text-gray-500">{job}</p>
                </td>
                <td className={classes}>
                  <h1 className="font-bold">{date}</h1>
                  <p className="text-gray-500">{date}</p>
                </td>

              </tr>
             </>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
export default Table2;