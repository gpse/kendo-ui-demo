import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'app-root',
    template: `
        <kendo-grid [data]="gridData" [height]="410">
            <kendo-grid-column field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250">
            </kendo-grid-column>
            <kendo-grid-column title="Category">
              <ng-template kendoGridCellTemplate let-dataItem>
                  <kendo-dropdownlist [data]="listItems"></kendo-dropdownlist>
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
                    <input type="checkbox" [checked]="dataItem.Discontinued"/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = products;
    public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
}
