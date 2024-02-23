import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  
  isError = '';
  maxFileSize = 10;
  upload = { status: '', percentage: '', filePath: '' };
  items: any = [];

  ngOnInit() {
    this.getData();
  }

  selectedFile: File | null = null;

  chooseFile(event: any) {
    this.isError = '';
    this.selectedFile = <File>event.target.files[0];
  }

  // upload file
  uploadFile() {
    let fileType = '';
    if (!this.selectedFile) {
      this.isError = 'Please select a file.';
      return;
    } else if (
      this.selectedFile &&
      this.selectedFile.size > this.maxFileSize * 1024 * 1024
    ) {
      this.isError = 'Uploaded file size is greater than 10 MB.';
      return;
    } else if (this.selectedFile) {
      fileType = this.selectedFile.type.split('/')[0];
      if (fileType !== 'image' && fileType !== 'video') {
        this.isError = 'Please upload image or video file.';
        return;
      }
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.apiService.postData(formData).subscribe((res) => {
      this.getData();
      this.selectedFile = null;
      this.upload = res;
    });
  }

  // get uploaded files
  getData() {
    this.apiService.getData().subscribe(
      (response: any) => {
        this.items = response;
        // console.log(this.items);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
