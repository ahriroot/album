import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

let id = 0
const data = []

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    id++
    const album = {id, ...createAlbumDto}
    data.push(album)
    return album
  }

  findAll(query: {page?: number, size?: number}) {
    const {page = 1, size = 10} = query
    const start = (page - 1) * size
    const end = start + size
    return {
        count: data.length,
        data: data.slice(start, end)
    }
  }

  findOne(id: number) {
    return data.find(album => album.id === id)
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    const index = data.findIndex(album => album.id === id)
    data[index] = {...data[index], ...updateAlbumDto}
    return data[index]
  }

  remove(id: number) {
    const index = data.findIndex(album => album.id === id)
    data.splice(index, 1)
    return {id}
  }
}
