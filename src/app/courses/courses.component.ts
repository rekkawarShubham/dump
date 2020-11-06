
import { CourseService } from './../course.service';
import { COURSES } from './mock-course';
import { Component, OnInit } from '@angular/core';
import {Course} from './course';


var data = "New File Contents";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  toogle:boolean=false;
  minimize= {height:'2.5rem',position:'fixed',bottom:0,overflow:'hidden'}
  maximize={height:'50vh',width :'50vh'}
  courses: Course[];
  selectedCourse : Course;
  constructor(private CourseService:CourseService) { };

  ngOnInit(){
    this.getCourses();
  }

  onSelect(course : Course):void{
    this.selectedCourse = course;
  }
  loadApplication(){
    console.log("hii");
  }
  myfuntion(){
    data+="Shubham Rekkawar";
 }
  
  copyMessages(courses){
    var allcourses="";  
    for(let i=0;i<courses.length;i++){
      allcourses += courses[i].name;
     }
     console.log(allcourses);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = allcourses;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  getCourses() : void {
    this.CourseService.getCourses().subscribe(courses=>this.courses=courses)
  }

  

}

