import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { ChoiceQuestion } from './question-choice';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 5
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        placeholder: 'digita',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'surname',
        label: 'Surname',
        //value: 'surname',
        placeholder: 'digita',
        order: 2,
      }),

      new TextboxQuestion({
        key: 'securityquestion',
        label: 'Security Question',
        value: 'type the security question',
        order: 3,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      }),

      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        value: 3,
        type: 'number',
        order: 6
      }),

      new ChoiceQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', label:'Solid',  value: 'Solid'},
          {key: 'great', label:'Great', value: 'Great'},
          {key: 'good',  label:'Good', value: 'Good'},
          {key: 'unproven', label:'Unproven', value: 'Unproven'}
        ],
        order: 7
      })


    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}