// Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.

import { RowID, RowElement } from "./interface";

// Declare the types for each function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
