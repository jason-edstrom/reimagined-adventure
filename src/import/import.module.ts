import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjsx/common';

import { SharedModule } from '../shared/shared.module';
import { Import } from './entities/import.entity';
import { ImportsController } from './controllers/import.controller';
import { ImportsService } from './services/imports.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Import])],
  controllers: [ImportsController],
  providers: [ImportsService],
  exports: [ImportsService],
})
export class ImportModule {}
