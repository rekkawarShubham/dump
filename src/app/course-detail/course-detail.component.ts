import { Course } from './../courses/course';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course : Course;
  constructor() { }

  ngOnInit(): void {
  }

}
