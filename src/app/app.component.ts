import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { products } from './products';

@Component({
    selector: 'app-root',
    template: `
        <kendo-grid [data]="gridData" [height]="1000">
            <kendo-grid-column field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="QuantityPerUnit" title="Quantity" width="250">
            </kendo-grid-column>
            <kendo-grid-column title="Roles">
              <ng-template kendoGridCellTemplate let-dataItem>
              <kendo-dropdownlist
                  [defaultItem]="dataItem.Category.CategoryName"
                  [data]="listItems"
              >
              </kendo-dropdownlist>
              </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="default" title="Default" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.ProductID%2==0"/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
  public gridData: any[] = products;
  public listItems: Array<string> = ["Beverages","Condiments","Seafood","Produce","Meat/Poultry", "Confections"];
  //public defaultItem: { text: string, value: number } = this.listItems[2];

  public show: boolean = true;
}
