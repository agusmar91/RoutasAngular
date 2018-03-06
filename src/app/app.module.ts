import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Servicios' }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
