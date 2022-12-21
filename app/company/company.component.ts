import { Component, OnInit } from '@angular/core';
import { faAngleRight, faFilm, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  isUxui = true;
  isTesting = false;
  isChain = false;
  isWeb = false;
  isMobile = false;
  isIot = false;
  planeIcone = faAngleRight;
  toggleCard(selection: string) {
    if (selection === 'UIUX') {
      this.isUxui = true;
      (this.isTesting = false),
        (this.isChain = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'testing') {
      this.isTesting = true;
      (this.isUxui = false),
        (this.isChain = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'blockchain') {
      this.isChain = true;
      this.isUxui = false;
      (this.isTesting = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'mobile') {
      this.isMobile = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isWeb = false),
        (this.isChain = false),
        (this.isIot = false);
    } else if (selection === 'web') {
      this.isWeb = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isMobile = false),
        (this.isChain = false),
        (this.isIot = false);
    } else if (selection === 'IoT') {
      this.isIot = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isMobile = false),
        (this.isChain = false),
        (this.isWeb = false);
    }

  }
  constructor() { }

  ngOnInit(): void {
  }
  bannerSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      430: {
        items: 2
      },
      500: {
        items: 2
      },
      740: {
        items: 2,
      },
      940: {
        items:3
      }
    },
    nav: true,
    navText: ['', ''],

  }
projectcount:number = 0;

projectcountStop:any = setInterval(()=>{
  this.projectcount++;
  if(this .projectcount ==300)
  {
    clearInterval(this.projectcountStop)
  }
},10)

pound:number = 0;
poundStop:any = setInterval(()=>{
  this.pound++;
  if(this .pound ==97)
  {
    clearInterval(this.poundStop)
  }
},10)

projectcounts:number = 0;
projectcountsStop:any = setInterval(()=>{
  this.projectcounts++;
  if(this .projectcounts ==300)
  {
    clearInterval(this.projectcountsStop)
  }
},10)
}


