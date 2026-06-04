import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

function makeInitialUsers(): User[] {
  return [
    {
      id: 1,
      name: 'Juan',
      age: 20,
    },
    {
      id: 2,
      name: 'Ruth',
      age: 10,
    },
  ];
}
let db = makeInitialUsers();

function addUser(createUserDto: CreateUserDto) {
  const id = db.length + 1;
  //diferencia push y concat
  //push modifica el array
  //concat solo genera un nuevo array pero no modifica

  const auxConcat = db.concat({
    id,
    name: createUserDto.name,
    age: createUserDto.age,
  });

  // const auxPush = db.push({
  //   id,
  //   name: createUserDto.name,
  //   age: createUserDto.age,
  // });

  db = auxConcat;

  return { auxConcat };
}

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return addUser(createUserDto);
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return db.find((u) => u.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
