import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Course } from '../entities/course.entity';
import { CoursesService } from '../services/course.service';

@Crud({
  model: {
    type: Course,
  },
})
@ApiTags('courses')
@Controller('courses')
export class CoursesController implements CrudController<Course> {
  constructor(public service: CoursesService) {}
}
