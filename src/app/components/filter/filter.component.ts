import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  template: `
  <form (ngSubmit) = "onSubmit()">
  <!-- the hashtag creates the template variable #filter -->
  <input type="text" placeholder="Filter by city" [(ngModel)] = "searchCity" name="searchCity"/>
  <!-- since we have a template variable now we have access to an htl variable ...value is a property on the input of the html element  -->
  <button class="primary" type="submit">Search</button>
</form>
`,
  styleUrls: ['./filter.component.css'],

imports: [CommonModule, FormsModule],
})

export class FilterComponent {
searchCity: string = "";

@Output() search = new EventEmitter<string>();

onSubmit() {
  this.search.emit(this.searchCity);
}

}
