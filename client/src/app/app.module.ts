import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {LightboxModule} from "ngx-lightbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home-page/home/home.component";
import {HeroComponent} from "./home-page/hero/hero.component";
import {CtaComponent} from "./home-page/cta/cta.component";
import {ServicesComponent} from "./home-page/services/services.component";
import {PortfolioComponent} from "./home-page/portfolio/portfolio.component";
import {ContactComponent} from "./home-page/contact/contact.component";
import {ClientsComponent} from "./home-page/clients/clients.component";
import {SkillsComponent} from "./home-page/skills/skills.component";
import {PortfolioDetailComponent} from "./home-page/portfolio/portfolio-detail/portfolio-detail.component";
import {WhyUsComponent} from "./home-page/why-us/why-us.component";
import {AboutComponent} from "./home-page/about/about.component";
import {HomePageComponent} from "./home-page/home-page.component";

import {aosToken, AosToken} from "./shared/aos";
import { AboutDetailComponent } from './home-page/about/about-detail/about-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './home-page/questions/questions.component';
import {AlertModule} from "./shared/modules/alert/alert.module";
import {ToastComponent} from "./shared/components/toast/toast.component";
import {DropdownDirective} from "./shared/directives/dropdown.directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

const mapConfig: YaConfig = {
  apikey: '28099cef-0440-4b38-b8a5-0cdbd162c57a',
  lang: 'ru_RU',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    WhyUsComponent,
    SkillsComponent,
    CtaComponent,
    FooterComponent,
    PortfolioDetailComponent,
    HomePageComponent,
    AboutDetailComponent,
    QuestionsComponent,
    ToastComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LightboxModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    FormsModule,
    NgbModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [
    {provide: AosToken, useValue: aosToken},
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
