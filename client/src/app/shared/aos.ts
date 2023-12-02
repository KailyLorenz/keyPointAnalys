// import * as animateOnScroll from 'aos';
import * as AOS from 'aos';
import { InjectionToken } from '@angular/core';

export const aosToken = AOS;
// This makes it possible to refer to AOS in Angular, see below
export const AosToken = new InjectionToken<any>('aosToken');
