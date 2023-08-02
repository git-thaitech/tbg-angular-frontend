import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './_components/alerts/alerts.component';
import { AccordionComponent } from './_components/accordion/accordion.component';
import { BadgesComponent } from './_components/badges/badges.component';
import { BreadcrumbsComponent } from './_components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './_components/buttons/buttons.component';
import { CardsComponent } from './_components/cards/cards.component';
import { CarouselComponent } from './_components/carousel/carousel.component';
import { ListGroupComponent } from './_components/list-group/list-group.component';
import { ModalComponent } from './_components/modal/modal.component';
import { TabsComponent } from './_components/tabs/tabs.component';
import { PaginationComponent } from './_components/pagination/pagination.component';
import { ProgressComponent } from './_components/progress/progress.component';
import { SpinnersComponent } from './_components/spinners/spinners.component';
import { TooltipsComponent } from './_components/tooltips/tooltips.component';
import { FormsElementsComponent } from './_components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './_components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './_components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './_components/tables-general/tables-general.component';
import { TablesDataComponent } from './_components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './_components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './_components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './_components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './_components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './_components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { InProcessingComponent } from './components/in-processing/in-processing.component';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { PriceComponent } from './components/price/price.component';
import { NewItemsComponent } from './components/create-order/children/new-items/new-items.component';
import { OldItemsComponent } from './components/create-order/children/old-items/old-items.component';
import { SummaryComponent } from './components/create-order/children/summary/summary.component';
import { CreateMortgageAgreementComponent } from './components/create-mortgage-agreement/create-mortgage-agreement.component';
import { SearchMortgageAgreementComponent } from './components/search-mortgage-agreement/search-mortgage-agreement.component';
import { RedemptionComponent } from './components/redemption/redemption.component';
import { MoneyFormatDirective } from './directive/money-format.directive';
import { NumberToWordsPipe } from './pipes/number-to-words.pipe';
import { GoldWeightFormatDirective } from './directive/gold-weight-format.directive';
import { NumberToGoldWeightUnitPipe } from './pipes/number-to-gold-weight-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    CreateOrderComponent,
    SearchOrderComponent,
    InProcessingComponent,
    DailyReportComponent,
    PriceComponent,
    NewItemsComponent,
    OldItemsComponent,
    SummaryComponent,
    CreateMortgageAgreementComponent,
    SearchMortgageAgreementComponent,
    RedemptionComponent,
    MoneyFormatDirective,
    NumberToWordsPipe,
    GoldWeightFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NumberToWordsPipe,
    NumberToGoldWeightUnitPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
