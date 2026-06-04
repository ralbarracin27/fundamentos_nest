import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

// programacion funcional

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
    ...createUserDto,
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
    // solucion 1
    /*
     const newArray = db.map(u=> 
      u.id === id ? { ...u, ...updateUserDto } : u
    )
    db = newArray;
    return db.find((u) => u.id === id); */

    // solucion 2
    // const user= db.find((u) => u.id === id);
    // const newUser = {...user, ...updateUserDto} as User

    // const userIndex = db.findIndex((u) => u.id === id);
    // db[userIndex] = newUser;

    // return newUser;

    // solucion 3

    const userIndex = db.findIndex((u) => u.id === id);

    if (userIndex === -1) throw new Error(`User #${id} not found`);

    db[userIndex] = { ...db[userIndex], ...updateUserDto };

    return db[userIndex];
  }

  remove(id: number) {
    // solucion 1
    /*    const userIndex = db.findIndex((u) => u.id === id);
    if (userIndex === -1) throw new Error(`User #${id} not found`);
    delete db[userIndex];
    return db[userIndex]; */

    // solucion 2
    const userIndex = db.findIndex((u) => u.id === id);
    if (userIndex === -1) throw new Error(`User #${id} not found`);
    const [removedUser] = db.splice(userIndex, 1);
    return removedUser;
  }
}
