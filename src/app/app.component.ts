import { Component } from '@angular/core';
import { QuestionService } from './question.service';


@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  styleUrls: [ './app.component.css' ],
  providers: [QuestionService]
})
export class AppComponent  {
  name = 'Angular';

   questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
