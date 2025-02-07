import { ReactNode } from "react";

export interface StudentRowData {
  id:number,
  name:string,
  email:string,
}
export interface typeData{
  Email:string,
  Password:string
}

export interface StudentColumnData {
feilds:keyof StudentRowData,
headerName:string,
}

export interface StudentTableProps {
    columns : StudentColumnData[];
    rows:StudentRowData[];
    actions: { icon: ReactNode; delete: ReactNode }[]; 
    addActionHeader: { feilds: string; headerName: string }[];
  }



  export interface StudentFormProps {
    formId: string;
    handleChangeStudent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: FormtypeData

  }