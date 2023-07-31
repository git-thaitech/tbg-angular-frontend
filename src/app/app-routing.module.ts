import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './_components/alerts/alerts.component';
import { AccordionComponent } from './_components/accordion/accordion.component';
import { BadgesComponent } from './_components/badges/badges.component';
import { BreadcrumbsComponent } from './_components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './_components/buttons/buttons.component';
import { CardsComponent } from './_components/cards/cards.component';
import { CarouselComponent } from './_components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './_components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './_components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './_components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './_components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './_components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './_components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './_components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './_components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './_components/list-group/list-group.component';
import { ModalComponent } from './_components/modal/modal.component';
import { PaginationComponent } from './_components/pagination/pagination.component';
import { ProgressComponent } from './_components/progress/progress.component';
import { SpinnersComponent } from './_components/spinners/spinners.component';
import { TablesDataComponent } from './_components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './_components/tables-general/tables-general.component';
import { TabsComponent } from './_components/tabs/tabs.component';
import { TooltipsComponent } from './_components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PriceComponent } from './components/price/price.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { CreateMortgageAgreementComponent } from './components/create-mortgage-agreement/create-mortgage-agreement.component';
import { RedemptionComponent } from './components/redemption/redemption.component';
import { SearchMortgageAgreementComponent } from './components/search-mortgage-agreement/search-mortgage-agreement.component';

const routes: Routes = [
  { path: '', title: "Trang chủ - Giá vàng", component: PriceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-order', title: "Tạo đơn hàng", component: CreateOrderComponent },
  { path: 'search-order', title: "Tìm kiếm đơn hàng", component: SearchOrderComponent },
  { path: 'create-mortgage-agreement', title: "Tạo đơn cầm", component: CreateMortgageAgreementComponent},
  { path: 'redemption', title: "Chuộc - đóng lãi", component: RedemptionComponent},
  { path: 'search-mortgage-agreement', title: "Tìm kiếm đơn cầm", component: SearchMortgageAgreementComponent},
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
