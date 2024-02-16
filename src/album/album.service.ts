import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

let id = 0
const data = [
    {
        id: ++id,
        title: 'Album 1',
        url: 'https://fastly.picsum.photos/id/648/200/200.jpg?hmac=Kb_qhDdDfOGevrbabLvz4Tp3fu-M7DxQE6APqQRnwVw',
    },
    {
        id: ++id,
        title: 'Album 2',
        url: 'https://fastly.picsum.photos/id/735/200/200.jpg?hmac=XML4Wv2mXSMlQw0EtA5w4gbgWnEexc-t-ulwq8lAu1o',
    },
    {
        id: ++id,
        title: 'Album 3',
        url: 'https://fastly.picsum.photos/id/980/200/200.jpg?hmac=6XJlc3jZzO4_ikuKGQFXIuERlW0eZx82q3xiC-b3Tso',
    },
    {
        id: ++id,
        title: 'Album 4',
        url: 'https://fastly.picsum.photos/id/588/200/200.jpg?hmac=amAMbyBq8ZvuCFGI8jPIt928PLIRtxNQ33bISsbDAys',
    },
    {
        id: ++id,
        title: 'Album 5',
        url: 'https://fastly.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4',
    },
    {
        id: ++id,
        title: 'Album 6',
        url: 'https://fastly.picsum.photos/id/1057/200/200.jpg?hmac=r6NrqZIpqIeOoxmvLgR8AQ0EHFPv15iZGGibkJx75P8',
    },
    {
        id: ++id,
        title: 'Album 7',
        url: 'https://fastly.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8',
    },
    {
        id: ++id,
        title: 'Album 8',
        url: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
    },
    {
        id: ++id,
        title: 'Album 9',
        url: 'https://fastly.picsum.photos/id/769/200/200.jpg?hmac=M55kAfuYOrcJ8a49hBRDhWtVLbJo88Y76kUz323SqLU',
    },
    {
        id: ++id,
        title: 'Album 10',
        url: 'https://fastly.picsum.photos/id/820/200/200.jpg?hmac=dWVRjEMHD9jchbBs5tM-RR5xdXdBGAzIn1qI9WzpLs4',
    },
    {
        id: ++id,
        title: 'Album 11',
        url: 'https://fastly.picsum.photos/id/352/200/200.jpg?hmac=HPgFQ0Sto_7261sbYIaRW0-z2Jq0-C92RSt0vkdC6Uc',
    },
    {
        id: ++id,
        title: 'Album 12',
        url: 'https://fastly.picsum.photos/id/1062/200/200.jpg?hmac=F_trr44XLYeth1u5FIqJIgtD4pR7WOlzKZ2xrQ3tzww',
    },
    {
        id: ++id,
        title: 'Album 13',
        url: 'https://fastly.picsum.photos/id/222/200/200.jpg?hmac=GngU-e1fHxK6MMBinwEkzsh8sMkjssl_vp8G6vJrb8U',
    },
    {
        id: ++id,
        title: 'Album 14',
        url: 'https://fastly.picsum.photos/id/871/200/200.jpg?hmac=RiUSuXl3prTnCTwjRX_be5hca7AJGWw75b50TxlMcFA',
    },
    {
        id: ++id,
        title: 'Album 15',
        url: 'https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM',
    },
    {
        id: ++id,
        title: 'Album 16',
        url: 'https://fastly.picsum.photos/id/846/200/200.jpg?hmac=sBOPnyp2w5gN9cwTnXUuQ528aG4bLJ2qf_d-3y-LjSo',
    },
    {
        id: ++id,
        title: 'Album 17',
        url: 'https://fastly.picsum.photos/id/376/200/200.jpg?hmac=lM2SnAPO9nDnPBP5FjJOFIJSaRoPKUJRovk6goT_nA4',
    },
    {
        id: ++id,
        title: 'Album 18',
        url: 'https://fastly.picsum.photos/id/348/200/200.jpg?hmac=3DFdqMmDkl3bpk6cV1tumcDAzASPQUSbXHXWZIbIvks',
    },
]

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    id++
    const album = {id, ...createAlbumDto}
    data.push(album)
    return album
  }

  findAll(query: {skip?: number, limit?: number}) {
    const {skip = 0, limit = 9} = query
    const start = skip
    const end = start + limit

    if (start >= data.length) {
        return {
            count: 0,
            data: []
        }
    }

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
