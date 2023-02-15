import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { UserViewDataComponent } from './user-view-data/user-view-data.component';

const routes: Routes = [
  { path: '', component: StepperFormComponent },
  { path: 'user-view', component: UserViewDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
