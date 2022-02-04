import {
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { ModifyMovieDto } from './dto/modify-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Array<Movie> {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Put('/:id')
  modify(@Param('id') movieId: number, @Body() modifyData: ModifyMovieDto) {
    return this.moviesService.modify(movieId, modifyData);
  }
}
