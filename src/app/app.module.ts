import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component'

const approutes:Routes=[
{path:'home',component:HomeComponent},
{path:'content',component:ContentComponent},
{path:'form',component:FormComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
