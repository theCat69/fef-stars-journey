import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './shared/navbar/navbar.routes'

//routes actually defined in shared/navbar.routes.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

