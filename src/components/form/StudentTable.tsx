import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface StudentRowData {
    id:number,
    name:string,
    email:string,
}

interface StudentColumnData {
  feilds:keyof StudentRowData,
  headerName:string,
}

const columns:StudentColumnData[]  = [
  {feilds:"id",headerName:"Students Id"},
  {feilds:"name",headerName:"Name"},
  {feilds:"email",headerName:"Email"},
]

  
const rows:StudentRowData[] = [
    {id:1,name:"donald",email:"trump@gmail.com"},
    {id:2,name:"john",email:"doe@gmail.com"},
    {id:3,name:"mark",email:"zukerberg@gmail.com"},
  ];
  

const StudentTable = () => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
      
        <TableRow>
          {columns?.map((val,index) =>(
                      <TableCell sx={{fontWeight:"bold"}} key={index}>{val.headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows?.map((row) => (
          <TableRow
            key={row.name}
          >
         {
          columns?.map((column,index)=>(
            <TableCell key={index}>{row[column.feilds]}</TableCell>
          ))
         }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default StudentTable