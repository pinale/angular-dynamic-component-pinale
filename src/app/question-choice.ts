import { QuestionBase } from './question-base';

export class ChoiceQuestion extends QuestionBase<string> {
  controlType = 'choice';
  options: {key: string, label: string, value: string}[] = [];
  exclusive: boolean = false;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}