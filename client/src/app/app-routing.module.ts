import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./home-page/hero/hero.component";
import {AboutComponent} from "./home-page/about/about.component";
import {ServicesComponent} from "./home-page/services/services.component";
import {PortfolioComponent} from "./home-page/portfolio/portfolio.component";
import {PortfolioDetailComponent} from "./home-page/portfolio/portfolio-detail/portfolio-detail.component";
import {ContactComponent} from "./home-page/contact/contact.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutDetailComponent} from "./home-page/about/about-detail/about-detail.component";


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/kpd', pathMatch: 'full' },
  { path: 'kpd', component: HomePageComponent},
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'kpd/about-more',
    component: AboutDetailComponent
  },

  //   component: AboutComponent, children: [
  //     {
  //       path: 'about-more',
  //       component: AboutDetailComponent
  //     }
  //   ]
  // },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'kpd/portfolio',
    component: PortfolioDetailComponent, children: [
      {
        path: ':id',
        component: PortfolioDetailComponent,
      },
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
