
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { MaintokenComponent } from './maintoken/maintoken.component';
import { TokenRoutingModule } from './token-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { UserComponent } from './pages/user-page/user.component';
import { ModalTokenComponent } from './Components/modal/modaltoken/modaltoken.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { FormsModule } from '@angular/forms';
import { TokenAdminComponent } from './Components/tokenAdmin/tokenAdmin/tokenAdmin.component';
import { TokenUserComponent } from './Components/tokenUser/tokenUser/tokenUser.component';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/navBar/navBar.component';
import { SpinnerComponent } from './Components/spinner/spinner/spinner.component';

import { AddCharacterPageComponent } from './pages/add-character-page/add-character-page.component';
import { CardComponent } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    MaintokenComponent,
    MenuComponent,
    UserComponent,
    AdminComponent ,
    ModalTokenComponent,
    TokenAdminComponent,
    TokenUserComponent,
    NavBarComponent,
    SpinnerComponent,
    AddCharacterPageComponent,


  ],
  imports: [
    CommonModule,
    TokenRoutingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [
    MaintokenComponent,
  ],
  providers: [

  ],

})
export class TokenModule { }
