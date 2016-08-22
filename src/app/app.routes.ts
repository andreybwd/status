import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { LoginComponent } from './login/login.component';
import { SpecialtyComponent } from './+specialty/specialty.component';
import { ServiceComponent } from './+service/service.component';
import { ManipulationComponent } from './+manipulation/manipulation.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { DiscountComponent } from './discount/discount.component';
import { ExaminationComponent } from './examination/examination.component';
import { DoctorComponent } from './doctor/doctor.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { InsuranceComponent } from './insurance/insurance.component';

const routes: RouterConfig = [
	{
		path: 'manage',
		component: ManageComponent,
		children: [
			{path: 'specialty', component: SpecialtyComponent},
			{path: 'service', component: ServiceComponent},
			{path: 'manipulation', component: ManipulationComponent},
			{path: 'workplace', component: WorkplaceComponent},
			{path: 'discount', component: DiscountComponent},
			{path: 'examination', component: ExaminationComponent},
			{path: 'doctor', component: DoctorComponent},
			{path: 'order', component: OrderComponent},
			{path: 'order-list', component: OrderListComponent},
			{path: 'insurance', component: InsuranceComponent}
		]
	},
	{path: 'login', component: LoginComponent},
	{path: '', component: LoginComponent}

];

export const appRouterProviders = [
	provideRouter(routes)
];