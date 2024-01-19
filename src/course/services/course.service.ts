import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesService extends TypeOrmCrudService<Course> {
  constructor(@InjectRepository(Course) repo) {
    super(repo);
  }
}
