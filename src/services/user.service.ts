import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import {Injectable} from '@angular/core';
import {Asset} from '../app/dashboard/asset.interface';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from '../app/dashboard/user.interface';

@Injectable()
export class UserService {
  postsCol: AngularFirestoreCollection<User>;
  constructor(private db : AngularFireDatabase,
              private afs : AngularFirestore,
              private http: HttpClient,
              ) {
    // no op
  }

  findUsers(): Observable<User[]> {
    this.postsCol = this.afs.collection('users');
    return  this.postsCol.valueChanges();;
  }

  findUsersByUserID(userId: string): Observable<User> {
    return null;
  }
}
