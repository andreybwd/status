import { Component, OnInit } from '@angular/core';

import { ExaminationList } from './examination-list/examination-list.model';
import { ExaminationListService } from './examination-list/examination-list.service';

import { Examination } from './examination.model';
import { ExaminationService } from './examination.service';

import { ExaminationTime, ExaminationTimeData } from './time/examination-time.model';

import { Workplace } from '../workplace/workplace.model';
import { WorkplaceService } from '../workplace/workplace.service';

@Component({
  moduleId: module.id,
  selector: 'app-examination',
  templateUrl: 'examination.component.html',
  styleUrls: ['examination.component.css']
})
export class ExaminationComponent implements OnInit {
	examinationLists : ExaminationList[] = [];
	examinationListModel : ExaminationList = new ExaminationList();

	examinations : Examination[] = [];
	examinationModel : Examination = new Examination();

	workplaces : Workplace[] = [];

	times : ExaminationTime[] = ExaminationTimeData;

  	constructor(
  		public examinationListService : ExaminationListService = new ExaminationListService,
  		public workplaceService : WorkplaceService,
  		public examinationService : ExaminationService = new ExaminationService
	) {}

  	ngOnInit() {
		this.examinationListService.getList().then(examinationLists => this.examinationLists = examinationLists);
		this.workplaceService.getList().then(workplaces => this.workplaces = workplaces);
		//this.examinationService.getList().then(examinations => this.examinations = examinations);
  	}

  	saveList() {
		this.examinationListService.save(this.examinationListModel);

		this.examinationListModel = new ExaminationList();
  	}

	save() {
		if (!this.examinationListModel.name) {
			alert("Выберите маршрут");
			return false;
		}
		this.examinationService.save(this.examinationListModel, this.examinationModel);

		this.examinationModel = new Examination;   
	}

	edit(index : number) {
		this.examinationModel = this.examinationListModel.Examinations[index];
	}

	remove(index : number) {
		if (confirm("Удалить?")) {
			this.examinationService.remove(this.examinationListModel, index);
		}
	}

	setList(list) {
		this.examinationListModel = list;
	}

}
