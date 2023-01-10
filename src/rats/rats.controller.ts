import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatsService } from './rats.service';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';

@Controller('rats')
export class RatsController {
  constructor(private readonly ratsService: RatsService) {}

  @Post()
  create(@Body() createRatDto: CreateRatDto) {
    return this.ratsService.create(createRatDto);
  }

  @Get()
  findAll() {
    return this.ratsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatDto: UpdateRatDto) {
    return this.ratsService.update(+id, updateRatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratsService.remove(+id);
  }
}
