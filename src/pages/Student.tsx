import { useState } from "react";
import ReactDialogBox from "../components/ReactDialogBox";
import { Button } from "@mui/material";
import StudentTable from "../components/table/StudentTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StudentColumnData } from "../types";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import { reducer } from "../reducer/addStudentReducer";
import FormikForm from "../components/form/FormikForm";
import SimpleSnackbar from "../components/snackbar/Snackbar";
import CustomizeDialog from "../components/customizeDialog/CustomizeDialog";

const Student = () => {
  const [students, dispatch] = useLocalStorageReducer("students", reducer, []);
  const [open, setOpen] = useState<boolean>(false);
  const [studentForm, setStudentForm] = useState<boolean>(false);
  const [selectRow, setSelectRow] = useState<object | string>("");
  const [selectStudent,SetSelectStudent] = useState()
  const [snackbar, setSnackBar] = useState({
    type: "",
    open: false,
    message: "",
  });

  const [deleteDialogBox, setDeleteDialogBox] = useState({
    open: false,
    message: "",
  });

  const handleClickOpen = () => {
    setSelectRow("");
    setStudentForm(false);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackBar({ type: "", open: false, message: "" });
  };

  const handleDeleteDialogBox = () => {
    setDeleteDialogBox({ open: false, message: "" });
  };

  const columns: StudentColumnData[] = [
    { feilds: "id", headerName: "Students Id" },
    { feilds: "name", headerName: "Name" },
    { feilds: "email", headerName: "Email" },
  ];

  const addActionHeader = [{ feilds: "action", headerName: "Action" }];

  const actions = [
    {
      icon: <EditIcon />,
      onClick: (row) => {
        setOpen(true), setStudentForm(true), setSelectRow(row);
      },
    },
    {
      delete: <DeleteIcon />,
      onClick: (row) => {
        setDeleteDialogBox({open: true, message: "Are You Delete This Shit..." })   
        SetSelectStudent(row);
      },
    },
  ];

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

      {/* StudentForm */}
      <ReactDialogBox
        open={open}
        handleClose={handleClose}
        formId="student"
        title={studentForm ? "Update Student Form" : "Create Student Form"}
        studentForm={studentForm}
      >
        <FormikForm
          formId="student"
          setOpen={setOpen}
          setSnackBar={setSnackBar}
          initialValue={selectRow}
          dispatch={dispatch}
        />
      </ReactDialogBox>

      {/* StudentTable */}

      <StudentTable
        columns={columns}
        rows={students}
        actions={actions}
        addActionHeader={addActionHeader}
      />
      <SimpleSnackbar
        handleSnackbarClose={handleSnackbarClose}
        snackbar={snackbar}
      />
      <CustomizeDialog
        deleteDialogBox={deleteDialogBox}
        setDeleteDialogBox={setDeleteDialogBox}
        handleDeleteDialogBox={handleDeleteDialogBox}
        dispatch={dispatch}
        selectStudent={selectStudent}
      />
    </>
  );
};

export default Student;
