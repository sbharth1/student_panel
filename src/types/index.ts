
export interface StudentRowData {
  id:number,
  name:string,
  email:string,
}

export interface StudentColumnData {
feilds:keyof StudentRowData,
headerName:string,
}