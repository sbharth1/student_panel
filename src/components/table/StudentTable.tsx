import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import { StudentTableProps } from '../../types';


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
                     <TableCell sx={{fontWeight:"bold"}} key={index}>{value.headerName}</TableCell>
                ))}
              {/* </TableCell> */}
        </TableRow>
          }
      </TableHead>
      <TableBody>
          { rows.length > 0  ? rows?.map((row) => (
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
                  <IconButton onClick={()=>action.onClick(row)} key={index}>{action.icon} {action.delete}</IconButton>
                  </>)) 
            }
          </TableCell>
          </TableRow>
        )) : <TableCell><Typography color='error' variant='h5' align='right'>No Student Data</Typography></TableCell>}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default StudentTable