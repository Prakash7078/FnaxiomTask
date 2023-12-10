import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["NameOfstudent","Glutt  .", "Almost done"];
 

 
function Table3() {
  return (
    <Card className="h-fit  mx-auto overflow-scroll bg-gray-800 text-gray-400 rounded-md">
      <table className="w-full  min-w-max table-auto text-left shadow-inner shadow-gray-500 ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className=" text-center  px-8 py-3"
              >
                <h1>{head}</h1>
              </th>
            ))}
          </tr>
        </thead>
       
      </table>
    </Card>
  );
}
export default Table3;