import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StudentColumnData, StudentRowData } from '../../types';
import { IconButton } from '@mui/material';
import { ReactNode } from 'react';

interface StudentTableProps {
  columns : StudentColumnData[];
  rows:StudentRowData[];
  actions: { icon: ReactNode; delete: ReactNode }[]; 
  addActionHeader: { feilds: string; headerName: string }[];
}
const StudentTable: React.FC<StudentTableProps> = ({columns =[],rows=[],actions=[],addActionHeader=[]}) => {

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
      {
        <TableRow>
          {columns?.map((val,index) =>(
                      <TableCell sx={{fontWeight:"bold"}} key={index}>{val.headerName}</TableCell>
          ))}

           
              {/* <TableCell align="left"> */}
                {addActionHeader.map((value,index)=>(
                     <TableCell sx={{fontWeight:"bold"}}>{value.headerName}</TableCell>
                ))}
              {/* </TableCell> */}
        </TableRow>
          }
      </TableHead>
      <TableBody>
        {rows?.map((row) => (
          <TableRow
            key={row.name}
          >
         { columns?.map((column,index)=>(
            <TableCell key={index}>{row[column.feilds]}</TableCell>
          ))}
          <TableCell>
            {
              actions.length > 0 &&  actions.map((action,index)=>(
                <>
                  <IconButton color='success'>{action.icon}</IconButton>
                  <IconButton color='error'>{action.delete}</IconButton>
                  </>)) 
            }
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default StudentTable