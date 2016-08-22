import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

import {
        FIREBASE_PROVIDERS,
        defaultFirebase,
        firebaseAuthConfig,
        AuthMethods,
        AuthProviders
    } from 'angularfire2';

import { UserService } from './app/common/user/user.service';
import { SpecialtyService } from './app/+specialty/specialty.service';
import { ServiceService } from './app/+service/service.service';
import { ServiceTypeService } from './app/+service/type/type.service';
import { ManipulationService } from './app/+manipulation/manipulation.service';
import { WorkplaceService } from './app/workplace/workplace.service';
import { DiscountService } from './app/discount/discount.service';
import { ExaminationListService } from './app/examination/examination-list/examination-list.service';
import { ExaminationService } from './app/examination/examination.service';
import { DoctorService } from './app/doctor/doctor.service';
import { DoctorGroupService } from './app/doctor/group/doctor-group.service';
import { DoctorSpecialtyService } from './app/doctor/specialty/doctor-specialty.service';
import { DoctorServiceService } from './app/doctor/service/doctor-service.service';
import { AlertService } from './app/common/alert/alert.service';
import { ClientService } from './app/client/client.service';
import { OrderService } from './app/order/order.service';
import { InsuranceService } from './app/insurance/insurance.service';
import { InsuranceDetailService } from './app/insurance/detail/insurance-detail.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
	appRouterProviders,

	disableDeprecatedForms(),
   	provideForms(),
	FIREBASE_PROVIDERS,
  	// Initialize Firebase app  
	defaultFirebase({
		apiKey: "AIzaSyACX-vPJQIj17NhTl98fi6OI4zz0jB-NpQ",
		authDomain: "status-d9d5a.firebaseapp.com",
		databaseURL: "https://status-d9d5a.firebaseio.com",
		storageBucket: "status-d9d5a.appspot.com"
	}),
	firebaseAuthConfig({
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    }),
    UserService,

	SpecialtyService, 
	ServiceService, 
	ServiceTypeService, 
	ManipulationService,
	WorkplaceService,
	DiscountService,
	ExaminationListService,
	ExaminationService,
	DoctorService,
	DoctorGroupService,
	DoctorSpecialtyService,
	DoctorServiceService,
	AlertService,
	ClientService,
	OrderService,
	InsuranceService,
	InsuranceDetailService
]);

