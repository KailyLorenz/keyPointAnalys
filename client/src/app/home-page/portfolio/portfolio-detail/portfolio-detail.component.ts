import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {AosToken} from "../../../shared/aos";
import SwiperCore, {Autoplay, SwiperOptions, Pagination} from 'swiper';
import {ActivatedRoute, Params} from "@angular/router";
import {UtilsService} from "../../../shared/services/utils.service";
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit, AfterContentInit, AfterViewInit{
  @ViewChild('swiperSlideShow') swiperSlideShow!: any;
  subHeader = false
  index = 0;
  config!: SwiperOptions
  sliders = [
    {'src': "assets/img/portfolio/portfolio-1.jpg"},
    {'src': "assets/img/portfolio/portfolio-2.jpg"},
    {'src': "assets/img/portfolio/portfolio-3.jpg"},
  ]

  constructor(@Inject(AosToken) aosToken: any, private route: ActivatedRoute,
              private utilsService: UtilsService) {
    aosToken.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.utilsService.setSubHeader(true)
    })
    this.config = {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {clickable: true, dynamicBullets: true},
    };
  }

  ngAfterContentInit (): void {}
  // slideChange(swiper: any) {
  //   this.index = swiper.detail[0].activeIndex;
  // }

  ngAfterViewInit(): void {
    // Start autoplay
    this.swiperSlideShow?.swiperRef.autoplay.start();
  }

}
