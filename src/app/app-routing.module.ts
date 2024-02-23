import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BalancestringComponent } from './balancestring/balancestring.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fibonacci', component: FibonacciComponent, pathMatch: 'full'},
  { path: 'balancestring', component: BalancestringComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
