import { Card, Typography } from "@material-tailwind/react";
import { HiDotsHorizontal } from "react-icons/hi";

const TABLE_HEAD = ["NameOfstudent","", "a"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "managerpost",
  },
  
 
];
 
function DefaultTable() {
  return (
    <Card className="h-fit  mx-auto overflow-scroll bg-gray-800 text-gray-400 rounded-md">
      <table className="w-full  min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-black text-center  p-4"
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => {
            const classes = "p-5 border border-gray-900";
 
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
              <tr >
                  <td className={`${classes} flex justify-between gap-2`}>
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-gray-500">12</p>
                  </td>
                  <td className={classes}>
                    <h1 className="font-bold">{name}</h1>
                  </td>
                  <td className={`${classes} flex justify-between gap-4 items-center px-2`}>
                    <span className="font-bold">{date}</span><HiDotsHorizontal/>
                  </td>

                </tr></>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
export default DefaultTable;