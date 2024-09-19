import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
import { WidgetComponent } from "../widget/widget.component";
import { FilterComponent } from "../components/filter/filter.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    WidgetComponent,
    FilterComponent,
  ],
  template: `
    <section>
      <div class="flex-box">
        <ng-template #newHeader class="half">
          <h1 style="color: blue;">Custom Header</h1>
        </ng-template>

        <app-filter (search)="filterResults($event)" class="half"></app-filter>
      </div>
    </section>

    <app-widget
      position="tomato"
      title="Weather"
      [widgetHeader]="newHeader"
    ></app-widget>

    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    // Fetch housing locations and initialize lists
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        (housingLocation) =>
          housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
