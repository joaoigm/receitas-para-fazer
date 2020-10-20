import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  toJson(file: File): string {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const arrayBuffer = fileReader.result;
      if (arrayBuffer instanceof ArrayBuffer) {
      }
    };
    fileReader.readAsArrayBuffer(file);
    return '';
  }
}
