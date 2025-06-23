import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, VideoModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  abrirVideoComAlert() {
    alert('Todas as nossas unidades estão cheias no momento, por enquanto, motive-se com esse vídeo');
    this.dialog.open(VideoModalComponent, {
      width: '80%',
      maxWidth: '900px',
    });
  }
}
