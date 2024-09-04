import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { DatabindComponent } from './databind/databind.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { TempledrivenformComponent } from './templedrivenform/templedrivenform.component';
import { ReactivedrivenformComponent } from './reactivedrivenform/reactivedrivenform.component';
import { ApiservService } from './apiserv.service';
import { ApicompComponent } from './apicomp/apicomp.component';
import { ApisdemoComponent } from './apisdemo/apisdemo.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {path:'delete',component:DeleteComponent},
    {path:'api',component:ApicompComponent},
    {path:'apis',component:ApisdemoComponent},
    {path:'templedriven',component:TempledrivenformComponent},
    {path:'reactive',component:ReactivedrivenformComponent},
    {path:'forms',component:FormsdemoComponent},
    {path:'databind',component:DatabindComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dir', component:DirectivedemoComponent},
    {path:'signup',component:SignupComponent},
    {path:'error',component:ErrorComponent},
];
