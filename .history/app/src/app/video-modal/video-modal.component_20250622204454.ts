import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [MatDialogModule],
  template: `
    <h2 mat-dialog-title>Motivação</h2>
    <mat-dialog-content>
      <iframe 
        width="100%" 
        height="315" 
        src="https://youtu.be/8BNP126zgPU?si=2hso3f-uGZe9Puex&t=15" 
        title="Ronnie Coleman Video" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      padding: 0;
    }
    iframe {
      border-radius: 8px;
    }
  `]
})
export class VideoModalComponent {}
