import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'action-sht', loadChildren: './pages/action-sht/action-sht.module#ActionShtPageModule' },
  { path: 'btns', loadChildren: './pages/btns/btns.module#BtnsPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'datepick', loadChildren: './pages/datepick/datepick.module#DatepickPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
