import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtAuthStrategy } from '../auth/strategies/jwt-auth.strategy';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { CoursesController } from './controllers/course.controller';
import { Course } from './entities/course.entity';
import { CoursesService } from './services/course.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Course]), UserModule],
  providers: [CoursesService, JwtAuthStrategy],
  exports: [CoursesService],
  controllers: [CoursesController],
})
export class CourseModule {}
