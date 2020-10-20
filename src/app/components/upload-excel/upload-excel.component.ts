import { Component, OnInit } from '@angular/core';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit {

  faFileExcel = faFileExcel;

  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
  }

  onUpload(event): void {
    console.log(event);
    console.log(event.target.files);
    console.log(this.excelService.toJson(event.target.files[0]));
  }

}
