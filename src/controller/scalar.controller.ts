import { Controller, Get, Inject } from '@midwayjs/core';
import { ApiExcludeController } from '@midwayjs/swagger';
import { ScalarService } from '../service/scalar.service';

@ApiExcludeController()
@Controller('/scalar')
export class ScalarController {
  @Inject()
  scalarService: ScalarService;

  @Get('/')
  async getApiReference() {
    return this.scalarService.render();
  }
}
