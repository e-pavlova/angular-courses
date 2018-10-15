import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import {SharedModule} from '../shared/shared.module';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {ConfirmationDialogService} from './confirmation-dialog/confirmation-dialog.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ConfirmationDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class CoreModule { }
