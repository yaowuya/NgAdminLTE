import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MissionService {

  public broadcastNotic = new Subject<object>();
  public broadcastEvent = this.broadcastNotic.asObservable();

  public broadcast(data: any) {
    this.broadcastNotic.next(data);
  }

  constructor() {
  }

}
