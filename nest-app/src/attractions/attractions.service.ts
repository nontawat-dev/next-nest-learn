import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity';

@Injectable()
export class AttractionsService {
  constructor(
    @InjectRepository(Attraction)
    private attractionsRepository: Repository<Attraction>,
  ) {}

  create(createAttractionDto: CreateAttractionDto) {
    return this.attractionsRepository.save(createAttractionDto) ;
  }

  findAll(): Promise<Attraction[]> {
    return this.attractionsRepository.find();
  }

  findOne(id: number): Promise< Attraction | null> {
    return this.attractionsRepository.findOneBy({id});
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return this.attractionsRepository.update(id, updateAttractionDto)
  }

  remove(id: number) {
    return this.attractionsRepository.delete(id);
  }
}
