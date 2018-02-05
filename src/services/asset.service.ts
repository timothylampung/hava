import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Asset} from '../app/dashboard/asset.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class AssetService {

  constructor(private http: HttpClient) {
    // no op
  }

  findAssets(): Observable<Asset[]> {
    return  this.http.get(environment.endpoint + '/assets.json').map(res => <Asset[]>res);
  }

  findAssetByAssetNo(assetNo: string): Observable<Asset> {
    return this.http.get(environment.endpoint + '/asset.json').map(res => <Asset>res);
  }
}
