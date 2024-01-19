import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../shared/shared.module';
import { ImportsController } from './controllers/import.controller';
import { Import } from './entities/import.entity';
import { ImportsService } from './services/imports.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Import])],
  controllers: [ImportsController],
  providers: [ImportsService],
  exports: [ImportsService],
})
export class ImportModule {}
