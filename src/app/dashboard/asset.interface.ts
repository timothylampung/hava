import {AssetStatus} from './asset-status.enum';
import {AssetCategory} from './asset-category.enum';
export interface Asset {
  id: number;
  assetNo: string;
  description: string;
  cost: number
  registeredDate: Date;
  status: AssetStatus;
  category: AssetCategory;
}
