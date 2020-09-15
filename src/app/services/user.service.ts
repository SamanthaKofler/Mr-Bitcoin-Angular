import { Injectable } from '@angular/core';
import { User }  from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private utilService: UtilsService) { }

  getUser() {
    return this.utilService.loadFromStorage('user');
  }
  signUp(name:string) {
    const id = this.utilService.makeId();
    var newUser = new User(id, name, 100, []);
    newUser.name = name;
    newUser._id = id;
    this.utilService.storeToStorage('user', newUser);
  }
  doTransfer(move) {
    var user = this.getUser();
    user.coins -=  move.amount;
    user.moves.unshift(move);
    this.utilService.storeToStorage('user', user);
  }
}
