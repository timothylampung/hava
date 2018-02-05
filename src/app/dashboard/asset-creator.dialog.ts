import {Component, OnInit} from '@angular/core';
import {Asset} from './asset.interface';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {AssetStatus} from './asset-status.enum';
import {AssetCategory} from './asset-category.enum';

@Component({
  selector: 'qs-asset-creator',
  templateUrl: './asset-creator.dialog.html',
})
export class AssetCreatorDialog implements OnInit {

  editorForm: FormGroup;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MatDialogRef<AssetCreatorDialog>) {
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      assetNo: ['', Validators.required],
      description: ['', [(Validators.required)]],
      status: [AssetStatus.AVAILABLE, [(Validators.required)]],
      category: [AssetCategory.COMPUTER, [(Validators.required)]],
      cost: ['', [(Validators.required)]],
    });
  }

  save(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.dialog.close();
  }
}
