import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { Asset } from './asset.interface';
import { Observable } from 'rxjs/Observable';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {User} from './user.interface';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {


  user$ : Observable<User[]>;
  assets$: Observable<Asset[]>;
  creatorDialogRef: MatDialogRef<AssetCreatorDialog>;

  loadUsers():void{
    this.user$ = this.userService.findUsers();
  }


  // constructor
  constructor(
              private assetService: AssetService,
              private userService : UserService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog
  ) {
  }

  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
  }

  viewAsset(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/detail', asset.assetNo]);
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadUsers();
  }




  ngOnDestroy(): void {
    // no op
  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });



}}
