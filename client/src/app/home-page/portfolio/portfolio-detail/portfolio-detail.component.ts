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
  // @ViewChild('swiperSlideShow') swiperSlideShow!: any;
  id!: string
  srcPowerBi: string | undefined = ''
  subHeader = false
  listPowerBi = new Map([
    ['1', ''],
    ['2', ''],
    ['3', ''],
    ['4', ''],
    ['5', ''],
    ['6', ''],
    ['7', 'https://app.powerbi.com/view?r=eyJrIjoiOWJiYzYzMzgtODUxZS00M2FlLWIwNjUtZDI5YWNlOGViYzdiIiwidCI6IjVkZWJiZTM2LWYwZjktNGFlNy04YjkxLTJiYjc1NDRiMGJmMyIsImMiOjl9'],
    ['8', ''],
    ['9', ''],
  ]
)
  // index = 0;
  // config!: SwiperOptions
  // sliders = [
  //   {'src': "assets/img/portfolio/portfolio-1.jpg"},
  //   {'src': "assets/img/portfolio/portfolio-2.jpg"},
  //   {'src': "assets/img/portfolio/portfolio-3.jpg"},
  // ]

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
    // this.route.paramMap.subscribe((params: Params) => {
    //   console.log('params', params)
    //   this.id = params.get['id']
    //   console.log('id', this.id)
    //   // this.utilsService.setSubHeader(true)
    // })
    const sub = this.route.params.subscribe(params => {
        this.id = params["id"]
        console.log('id1', this.id)
        // const key = `'${this.id}'`
        this.srcPowerBi = this.listPowerBi.get(this.id)
        console.log('LINK', this.srcPowerBi)
        console.log('id', this.id)
    }
    )

    // this.id = this.route.snapshot.params['id'];
    // console.log('id', this.id)

    // if (this.id) {
    //
    //   console.log('LINK', this.srcPowerBi)
    // }


    // this.config = {
    //   speed: 400,
    //   loop: true,
    //   autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false
    //   },
    //   pagination: {clickable: true, dynamicBullets: true},
    // };
  }

  ngAfterContentInit (): void {}

  ngAfterViewInit(): void {
  }
  // slideChange(swiper: any) {
  //   this.index = swiper.detail[0].activeIndex;
  // }

  // ngAfterViewInit(): void {
  //   // Start autoplay
  //   this.swiperSlideShow?.swiperRef.autoplay.start();
  // }

}
