import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'toolbar-basic-example',
  templateUrl: 'toolbar-basic-example.html',
  styleUrl: 'toolbar-basic-example.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarBasicExample {}
