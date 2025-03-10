import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomizeDialog({
  deleteDialogBox,
  handleDeleteDialogBox,
  setDeleteDialogBox,
  dispatch,
  selectStudent,
}) {
  const handleDelete = () => {
    dispatch({ type: "DELETE_STUDENT", payload: selectStudent.id });
    setDeleteDialogBox({open:false, message:""});
  };
  return (
    <>
      <Dialog
        open={deleteDialogBox.open}
        onClose={handleDeleteDialogBox}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {deleteDialogBox.message}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleDeleteDialogBox}>Disagree</Button>
          <Button onClick={() => handleDelete()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
