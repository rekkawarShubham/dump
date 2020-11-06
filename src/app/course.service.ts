import { MessagesService } from './messages.service';
import { COURSES } from './courses/mock-course';
import { Course } from './courses/course';
import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private MessagesService: MessagesService) { }

  getCourses() : Observable<Course[]>{
    this.MessagesService.add("Fectech course from services");  
    return of (COURSES);
  }
}
