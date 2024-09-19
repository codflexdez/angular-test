import {
  Component,
  Input,
  inject,
  TemplateRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileService } from "../data/services/profile.service";
import { Profile } from "../data/interfaces/profile";
import { ImgUrlPipe } from "../helpers/pipes/img-url.pipe";

@Component({
  selector: "app-widget",
  standalone: true,
  imports: [CommonModule, ImgUrlPipe],
  styleUrls: ["./widget.component.css"],

  template: `
    <ng-container [ngTemplateOutlet]="header || widgetHeader"></ng-container>

    <ng-template #header>
      <h1 [style]="position">{{ title }}</h1>
    </ng-template>

    <section class="profile-card" *ngFor="let profile of profiles">
      <div class="profile-img-space">
        <img
          class="avatar"
          [src]="profile.avatarUrl | imgUrl"
          [alt]="profile.username"
        />
      </div>
      <h2>{{ profile.firstName }} {{ profile.lastName }}</h2>
      <div class="profile-contact">
        <span>{{ profile.username }}</span>
        <span>{{ profile.description }}</span>
      </div>
    </section>
  `,
})
export class WidgetComponent {
  @Input() title: string = "";
  @Input() position: string = "";
  @Input() widgetHeader!: TemplateRef<any>;

  profileService: ProfileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
