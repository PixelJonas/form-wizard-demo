import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';

@Injectable()
export class UserService extends EntityServiceBase<any> {

  constructor(entityServiceFactory: EntityServiceFactory) {
    super('User', entityServiceFactory);
  }

}

