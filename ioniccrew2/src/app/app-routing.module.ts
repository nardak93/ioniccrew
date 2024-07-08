import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'scss',
    loadChildren: () => import('./scss/scss.module').then( m => m.ScssPageModule)
  },
  {
    path: 'ionic-dev',
    loadChildren: () => import('./ionic-dev/ionic-dev.module').then( m => m.IonicDevPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
