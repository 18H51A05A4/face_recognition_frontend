import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  // @ViewChild('getAttendance') getAttendance: any;
 @ViewChild('items') items:ElementRef<HTMLElement>;
 @ViewChildren('studentList') studentList:QueryList<HTMLElement>
  showOverlay: boolean = false;
  showStudents:boolean=false;
  myForm:FormGroup
  students: any[] = [];
  form:any[]=[];
  chckedList:any[]=[];
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.students[0]={
    id:1,
    studentName:"venkatesh"
    }
    this.students[1]={
    id:2,
    studentName:"Sreejan"
    }
    this.myForm=this.fb.group({
    className:[''],
    startTime:[''],
    endTime:[''],
    date:[''],
    })
  }
  onSubmit(){
    console.log(this.myForm)
    this.studentList.forEach((item)=>{
     console.log(item)
    })
  }
  getAttendance() {
    this.showOverlay = true;
  }
  closeModal() {
    this.showOverlay = false;
  }
  displayStudents(){
     if(this.items.nativeElement.style.display=='block')
     this.items.nativeElement.style.display='none'
     else
     this.items.nativeElement.style.display='block'
    console.log("toggle", this.items);
  }

}

