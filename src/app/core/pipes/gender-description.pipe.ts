import { CommonModule } from "@angular/common";
import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'genderDescription'})
export class GenderDescriptionPipe implements PipeTransform {
  transform(value: number): string {
    return value == 1 ? 'Male' : 'Female'
  }
}

@NgModule({
	declarations: [GenderDescriptionPipe],
	imports: [CommonModule],
	exports: [GenderDescriptionPipe]
})
export class GenderDescriptionPipeModule { }