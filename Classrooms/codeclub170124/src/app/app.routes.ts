import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ManipulationComponent } from './component/manipulation/manipulation.component';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgButtonComponent } from './component/ag-button/ag-button.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'input', pathMatch: 'full' },
    { path: 'manipulation', component: ManipulationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
