import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Import } from '../entities/import.entity';
import { ImportsService } from '../services/imports.service';

@Crud({
  model: {
    type: Import,
  },
})
@ApiTags('imports')
@Controller('imports')
export class ImportsController implements CrudController<Import> {
  constructor(public service: ImportsService) {}
}
