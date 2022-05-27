import { ClassModel } from './../../Models/class-model';
import { AppServicesService } from './../../Services/app-services.service';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  // @ViewChild('getAttendance') getAttendance: any;
  @ViewChild('items') items: ElementRef<HTMLElement>;
  @ViewChildren('studentList') studentList: QueryList<ElementRef<HTMLElement>>;
  showOverlay: boolean = false;
  showStudents: boolean = false;
  myForm: FormGroup
  students: any[] = [];
  form: any[] = [];
  chckedList: any[] = [];
  classes: any[] = [];

  constructor(private fb: FormBuilder, private _appService: AppServicesService) { }

  ngOnInit(): void {
    this._appService.getAllStudents().subscribe(students => {
      this.students = students;
    });

    this._appService.getTodaysClasses().subscribe(classes => {
      this.classes = classes;
      console.log(classes);
    });

    this._appService.getSpecificClassStudentsAttendance().subscribe(attendance => {
      console.log(attendance);
    })

    this.myForm = this.fb.group({
      className: [''],
      startTime: [''],
      endTime: [''],
      date: [''],
      meetinglink: ['']
    });
  }

  onSubmit() {
    var classModel = new ClassModel();
    classModel.class_name = this.myForm.value.className;
    classModel.start_time = this.myForm.value.startTime;
    classModel.end_time = this.myForm.value.endTime;
    classModel.class_date = this.myForm.value.date;
    classModel.meet_link = this.myForm.value.meetinglink;
    classModel.students = this.chckedList;
    console.log(classModel);

    this._appService.createClass(classModel).subscribe(res => {
      console.log(res);
    });
  }

  getAttendance() {
    this.showOverlay = true;
  }

  closeModal() {
    this.showOverlay = false;
  }

  displayStudents() {
    if (this.items.nativeElement.style.display == 'block')
      this.items.nativeElement.style.display = 'none'
    else
      this.items.nativeElement.style.display = 'block'
    console.log("toggle", this.items);
  }

  addItem(event: any) {
    if(event.target.checked)
      this.chckedList.push(parseInt(event.target.value));
    else
      this.chckedList = this.chckedList.filter(x => x != event.target.value);
    console.log(this.chckedList);
  }
}

