import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Import } from '../entities/import.entity';

@Injectable()
export class ImportsService extends TypeOrmCrudService<Import> {
  constructor(@InjectRepository(Import) repo) {
    super(repo);
  }
}
