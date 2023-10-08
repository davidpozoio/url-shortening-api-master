import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { LinkService } from '../../../services/link/link.service';
import { LinkListService } from '../../../services/link-list/link-list.service';

@Component({
  selector: 'app-link-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
})
export class LinkFormComponent {
  #link = inject(LinkService);
  #linkList = inject(LinkListService);

  linkControl: FormControl;
  disabledSubmit = false;
  destroyer$: Subject<void>;

  constructor() {
    this.destroyer$ = new Subject();
    this.linkControl = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
    this.linkControl.valueChanges
      .pipe(debounceTime(200), takeUntil(this.destroyer$))
      .subscribe((res) => {
        if (res) this.disabledSubmit = false;
      });
  }

  onSubmit() {
    if (this.linkControl.invalid) {
      this.linkControl.markAllAsTouched();
      this.disabledSubmit = true;
      return;
    }

    this.#link.short(this.linkControl.value).subscribe((res) => {
      this.#linkList.addNewLink(res);
    });
  }

  ngOnDestroy() {
    this.destroyer$.next();
    this.destroyer$.complete();
  }
}
