import { Flow, Integration, IntegrationType, Step } from '@syndesis/ui/platform';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation, OnChanges
} from '@angular/core';

import { StepStore } from '@syndesis/ui/store';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'syndesis-integration-description',
  templateUrl: './integration-description.component.html',
  styleUrls: ['./integration-description.component.scss']
})
export class IntegrationDescriptionComponent {
  @Input() integration: Integration;
  @Input() stepStore: StepStore;

  @Output() viewDetails = new EventEmitter<Step>();
  @Output() attributeUpdated = new EventEmitter<{ [key: string]: string }>();

  protected IntegrationType = IntegrationType;

  onViewDetails(step: Step): void {
    this.viewDetails.emit(step);
  }

  onAttributeUpdated(attribute: string, value: string): void {
    this.attributeUpdated.emit({ [attribute]: value });
  }

  getStepLineClass(stepIndex: number, flowIndex = 0): string {
    return stepIndex === this.integration.flows[flowIndex].steps.length - 1
      ? 'finish'
      : stepIndex === 0
        ? 'start'
        : '';
  }

}
