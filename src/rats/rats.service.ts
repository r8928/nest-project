import { Injectable } from '@nestjs/common';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';

@Injectable()
export class RatsService {
  create(createRatDto: CreateRatDto) {
    return 'This action adds a new rat';
  }

  findAll() {
    return `This action returns all rats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rat`;
  }

  update(id: number, updateRatDto: UpdateRatDto) {
    return `This action updates a #${id} rat`;
  }

  remove(id: number) {
    return `This action removes a #${id} rat`;
  }
}
