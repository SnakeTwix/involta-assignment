import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {
  constructor(private readonly person: PersonService) {}

  @Get()
  findAll() {
    return this.person.findAll();
  }
}

