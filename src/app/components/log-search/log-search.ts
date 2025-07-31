import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogService, LogEntry } from '../../services/log';
@Component({
  selector: 'app-log-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './log-search.html',
  styleUrl: './log-search.scss',
})
export class LogSearch {
  searchForm: FormGroup;
  logs: LogEntry[] = [];
  showValidationError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private logService: LogService
    ) {
    this.searchForm = this.fb.group({
      vehicleId: [''],
      errorCode: [''],
      from: [''],
      to: [''],
    });
  }

  search() {
    const { vehicleId, errorCode, from, to } = this.searchForm.value;

    // to validate feilds to check atleast one field is filled
    if (!vehicleId && !errorCode && !from && !to) {
      this.showValidationError = true;
      return;
    }

    const filters = {
      vehicle: vehicleId,
      code: errorCode,
      from,
      to,
    };

    this.logs = [];

    this.logService.getLogs(filters).subscribe({
      next: (data: LogEntry[]) => {
        this.logs = data;
      },
      error: (err: any) => {
        console.error('Error fetching logs:', err);
      },
    });
  }
}
