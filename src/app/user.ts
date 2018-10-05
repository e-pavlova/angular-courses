import { UserItem } from './user.interface';

export class User implements UserItem {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number,
              firstName: string,
              lastName: string) {
  }
}
