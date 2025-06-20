import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [  // ← Only export these Material modules
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule {}