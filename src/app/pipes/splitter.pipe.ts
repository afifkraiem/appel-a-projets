import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitter'
})
export class SplitterPipe implements PipeTransform {
  transform(text: string): any {
    var the_test_spliter=new RegExp('\n',"g");
    if(text == null) {
      return '';
    }
    return text.split(the_test_spliter);
  }

}
