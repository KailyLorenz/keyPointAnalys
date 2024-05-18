import {
  AfterViewChecked,
  AfterViewInit, Component, ElementRef,
  EventEmitter, HostListener, Inject, OnInit, ViewChild
} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";
import * as AOS from 'aos';
import {Swiper} from "swiper";
import {AosToken} from "../../shared/aos";
import {BehaviorSubject} from "rxjs";

declare var GLightbox: any;
declare var Isotope: any;
@Component({
  selector: 'kpd-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit  {
  load!: boolean
  loadedImages = 0
  @ViewChild('portfolioContainer') portfolioContainer: ElementRef | undefined
  portfolio = [
    {
      'id': '1',
      'img': 'assets/img/portfolio/portfolio-1.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-marketing_solutions',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '2',
      'img': 'assets/img/portfolio/portfolio-2.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-marketing_solutions',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '3',
      'img': 'assets/img/portfolio/portfolio-3.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-marketing_solutions',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '4',
      'img': 'assets/img/portfolio/portfolio-4.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-production_analysis',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '5',
      'img': 'assets/img/portfolio/portfolio-5.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-production_analysis',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '6',
      'img': 'assets/img/portfolio/portfolio-6.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-production_analysis',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '7',
      'img': 'assets/img/portfolio/portfolio-7.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-finance',
      'name': 'Финансовые отчеты',
      'details': 'Финансовые отчеты'
    },
    {
      'id': '8',
      'img': 'assets/img/portfolio/portfolio-8.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-finance',
      'name': 'app',
      'details': 'app'
    },
    {
      'id': '9',
      'img': 'assets/img/portfolio/portfolio-9.jpg',
      'link': 'portfolio-details',
      'filter': 'filter-finance',
      'name': 'app',
      'details': 'app'
    },
  ]
  list = [
    {filter: 'all', name: 'Все'},
    {filter: 'production_analysis', name: 'Анализ производства'},
    {filter: 'marketing_solutions', name: 'Маркетинговые решения'},
    {filter: 'finance', name: 'Финансовый блок'},
  ]
  // list_ = ['Все', 'Маркетинговые решения', 'Анализ производства', 'Финансовый блок']
  activeItem: string | undefined;
  portfolioIsotope: any;
  slides$ = new BehaviorSubject<any[]>(['']);

  constructor(@Inject(AosToken) aosToken: any) {
    // aosToken.init({
    //   duration: 1000,
    //   easing: "ease-in-out",
    //   once: true,
    //   mirror: false
    // });
    // setTimeout(() => {
    //   if (this.portfolioContainer?.nativeElement) {
    //     this.portfolioIsotope = new Isotope(this.portfolioContainer.nativeElement, {
    //       itemSelector: '.portfolio-item',
    //     });
    //   }
    // }, 5)
  }

  ngAfterViewInit(): void {
    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
    // if (this.portfolioContainer?.nativeElement) {
    //   console.log('this.portfolioContainer?.nativeElement', this.portfolioContainer?.nativeElement)
    //   this.portfolioIsotope = new Isotope(this.portfolioContainer.nativeElement, {
    //     itemSelector: '.portfolio-item',
    //   });
    // }
    // setTimeout(() => {
    //   if (this.portfolioContainer?.nativeElement) {
    //     console.log('this.portfolioContainer?.nativeElement', this.portfolioContainer?.nativeElement)
    //     this.portfolioIsotope = new Isotope(this.portfolioContainer.nativeElement, {
    //       itemSelector: '.portfolio-item',
    //     });
    //   }
    // }, 0)

  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
    // if (!this.load) {
    //   this.onLoad();
    // }
  }


  ngOnInit(): void {
    /**
     * Portfolio details slider
     */
    this.activeItem = 'all'
    this.load = false
    // this.portfolioIsotope.arrange({
    //   filter: this.activeItem
    // });
    // this.portfolioIsotope.on('arrangeComplete', function () {
    //   AOS.refresh()
    // });

    // new Swiper('.portfolio-details-slider', {
    //   speed: 400,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   }
    // });
    // this.slides$.next(
    //   Array.from(this.portfolio)
    // );


  }
  // @HostListener('window:load') onLoad() {
  //   console.log('onLoad', this.portfolioContainer?.nativeElement)
  //
  //   if (this.portfolioContainer?.nativeElement) {
  //     this.portfolioIsotope = new Isotope(this.portfolioContainer.nativeElement, {
  //       itemSelector: '.portfolio-item',
  //     });
  //   }
  // }

  onSelectFilter(item: string) {
    this.activeItem = item
    const filter = item === 'all' ? '*' : `.filter-${item.toLowerCase()}`
    console.log('filter', filter)
    this.portfolioIsotope.arrange({
        filter
      });
      this.portfolioIsotope.on('arrangeComplete', function () {
        AOS.refresh()
      });
  }
  loaded(){
    this.loadedImages++;
    // console.log('this.portfolio.length',this.portfolio.length)
    // console.log('this.portfolio.length',this.loadedImages)
    if(this.portfolio.length === this.loadedImages){
      if (this.portfolioContainer?.nativeElement) {
        // console.log('this.portfolioContainer?.nativeElement', this.portfolioContainer?.nativeElement)
        this.portfolioIsotope = new Isotope(this.portfolioContainer.nativeElement, {
          itemSelector: '.portfolio-item',
        });
      }
      //all images loaded
    }
  }
}
