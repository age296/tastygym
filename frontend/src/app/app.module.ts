import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping/events-marca-webscraping.component';
import { LoginComponent } from './login/login.component';
import { AppLoggedRoutes } from './app-logged.routing';
import { LoginServiceService } from 'src/login-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CustomHttpInterceptor } from 'src/CustomHttpInterceptor';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';

import { DialogData, DialogDataDialog } from './dialog-view/dialog-view.component';
import { LikeListComponent } from './like-list/like-list.component';

@NgModule({
  declarations: [																	
      AppComponent,
      ExerciseComponent,
      ExerciseListComponent,
      ToolbarComponent,
      ExerciseComponent,
      SearchBarComponent,
      ExerciseMenuComponent,
      EventsMarcaWebscrapingComponent,
      LoginComponent,
      DashboardComponent,
      PageNotFoundComponent,
      SpinnerComponent,
      RegisterComponent,
      DialogData,
      DialogDataDialog,
      LikeListComponent
   ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [LoginServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
