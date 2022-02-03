import {
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Body,
  Query,
} from '@nestjs/common';
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
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Put('/:id')
  modify(
    @Param('id') movieId: string,
    @Body() modifyData: { name: string; director: string },
  ) {
    return {
      modifyMovie: movieId,
      ...modifyData,
    };
  }
}
